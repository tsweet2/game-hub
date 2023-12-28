import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5a30ea6eaaa24b9287447a9a2bfc8253",
    },
});