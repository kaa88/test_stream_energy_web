import { apiInstance } from ".";
import * as types from "../types/types";

export const api = {
  async get(queryData: types.QueryGetHoroscope) {
    return await apiInstance.post<types.QueryResponseHoroscope>("/", queryData);
  },
  async getAll(queryData: types.QueryGetAllHoroscopes) {
    return await apiInstance.post<types.QueryResponseAllHoroscopes>(
      "/",
      queryData
    );
  },
};
