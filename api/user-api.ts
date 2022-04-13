import axios from "axios";
import {TypeUser} from "~/types/TypeUser";

export class UserApi {
  private static baseUrl: string = `http://localhost:8080/users`;

  public static LoadUser = (userId: string): Promise<TypeUser> => {
    return axios.get(UserApi.baseUrl + `/${userId}`);
  }

  public static AddUser = (data: Omit<TypeUser, "id">): Promise<TypeUser> => {
    return axios.post(UserApi.baseUrl, data);
  }

  public static UpdateUser = (userId: string, data: Omit<TypeUser, "id">): Promise<TypeUser> => {
    return axios.patch(UserApi.baseUrl + `/${userId}`, data);
  }
}
