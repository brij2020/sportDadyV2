import axios from "axios";
let baseURL = 'http://localhost:8090';
baseURL =  'http://44.203.200.73'
const axiosInstance = axios.create({
    baseURL: baseURL,
  });

export {
    axiosInstance
}