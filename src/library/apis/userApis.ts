import ApiConstants from "../constants/ApiConstants";
import { apiCall } from "./api";

export const loginApi = <T>(data: any) =>
    apiCall<T>("POST", ApiConstants.BASE_URL + ApiConstants.LOGIN_API, data);

export const getUsers = <T>() =>
    apiCall<T>("GET", "https://reqres.in/users/2836");
