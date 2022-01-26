import Head from "next/head";
import { useState } from "react";
import Footer from "../../components/Footer";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = "http://localhost:5000/auth/signin";

    const { doRequest, errors } = useRequest({
        url,
        method: "post",
        body: { email, password },
        onSuccess: () => Router.push("/"),
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    };

    return (
        <div>
            <Head>
                <title>Log In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-center mx-auto m-10 p-4 max-w-[700px]">
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col flex-grow space-y-1 border-2 rounded-lg py-2 px-4"
                >
                    <label htmlFor="email" className="label">
                        Email:
                    </label>
                    <input
                        className="input"
                        id="email"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="label">
                        Password:
                    </label>
                    <input
                        className="input"
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors}
                    <div className="flex mt-3">
                        <button className="button text-red-400 flex-grow hover:shadow-md active:bg-red-400 active:text-white">
                            Submit
                        </button>
                        <button
                            type="reset"
                            className="button bg-red-400 text-white flex-grow hover:shadow-md active:bg-white active:text-red-400"
                        >
                            clear
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}
export default login;
