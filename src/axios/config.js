import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://tepi.isaquebrag.repl.co",
    headers: {
        "Content-Type": "aplication/json",
    }
})

export default blogFetch;