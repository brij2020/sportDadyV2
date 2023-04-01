import axios from "axios";

console.log(process.env)
const axiosInstance = axios.create({
    baseURL: 'http://44.203.200.73',
  });

export {
    axiosInstance
}