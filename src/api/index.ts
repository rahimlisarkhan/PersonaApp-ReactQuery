import { ENDPOINTS } from "shared/constants/endpoints";
import { apiReq } from "shared/helpers/axios";
import { DataRequestType } from "types";

export const getUsers = (params: any): DataRequestType<any> =>
  apiReq({ method: "GET", url: ENDPOINTS.USERS, params });

export const createUser = (data: any): DataRequestType<any> =>
  apiReq({ method: "POST", url: ENDPOINTS.USERS, data });

export const updateUser = (id: number, data: any): DataRequestType<any> =>
  apiReq({ method: "PUT", url: ENDPOINTS.USERS_ID(id), data });

export const removeUser = (id: number, data: any): DataRequestType<any> =>
  apiReq({ method: "DELETE", url: ENDPOINTS.USERS_ID(id), data });
