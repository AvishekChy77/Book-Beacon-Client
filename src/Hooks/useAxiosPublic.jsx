import axios from "axios";
import { API_URL } from "../api";

const axiosPublic = axios.create({
  baseURL: API_URL,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
