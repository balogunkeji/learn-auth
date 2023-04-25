import axios from "axios";

const BASE_URL = "https://staging-api.filmmakersmart.com";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
