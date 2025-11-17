import axios, { Axios } from "axios";

class AxiosService {
  protected client: Axios;

  constructor() {
    const requestCreation = axios.create({
      baseURL: process.env.NEXT_API_URL,
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Methods": "GET, DELETE, PATCH, POST, PUT, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization",
      },
    });
    this.client = requestCreation;
  }
}

export default AxiosService;
