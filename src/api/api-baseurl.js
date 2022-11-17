import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8090/inc/api/",
});