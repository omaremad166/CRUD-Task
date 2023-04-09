import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7221",
  headers: {
    "Content-type": "application/json"
  }
});