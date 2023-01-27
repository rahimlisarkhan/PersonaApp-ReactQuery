import { ENDPOINTS } from "shared/constants/endpoints";
import { apiReq } from "shared/helpers/axios";
import { DataRequestType, UserType } from "types";

export const getUsers = (user_id: number | null): DataRequestType<UserType[]> =>
  apiReq({
    method: "GET",
    url: user_id ? ENDPOINTS.USERS_ID(user_id) : ENDPOINTS.USERS,
  });

export const createUser = (data: any): DataRequestType<UserType> =>
  apiReq({ method: "POST", url: ENDPOINTS.USERS, data });

export const updateUser = (id: number, data: any): DataRequestType<UserType> =>
  apiReq({ method: "PUT", url: ENDPOINTS.USERS_ID(id), data });

export const removeUser = (id: number, data: any): DataRequestType<{}> =>
  apiReq({ method: "DELETE", url: ENDPOINTS.USERS_ID(id), data });
