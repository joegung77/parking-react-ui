import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9091/parking",
    headers: {
        "Content-type": "application/json" 
    }
})
