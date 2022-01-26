import "../styles/globals.css";
import Progressbar from "@badrap/bar-of-progress";
import Router from "next/router";
import buildClient from "../api/build-clint";
import Header from "../components/Header";

const progress = new Progressbar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps, currentUser }) => {
    console.log(currentUser);
    return (
        <div>
            <Header currentUser={currentUser} />
            <Component {...pageProps} />
        </div>
    );
};

MyApp.getInitialProps = async (appContext) => {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get("http://localhost:5000/auth/currentuser");

    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }

    return {
        pageProps,
        ...data,
    };
};

export default MyApp;
