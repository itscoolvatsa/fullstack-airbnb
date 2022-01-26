import axios from "axios";

const buildClient = ({ req }) => {
    if (typeof window === "undefined") {
        // on server
        return axios.create({
            headers: req.headers,
        });
    } else {
        // on browser
        return axios.create({});
    }
};
export default buildClient;
