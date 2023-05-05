import axios from "axios";
let defaultPROD_API = 'http://44.203.200.73'
 defaultPROD_API = 'http://localhost:8090'

const axiosInstance = axios.create({
    baseURL:  defaultPROD_API ,
  });

export {
    axiosInstance
}