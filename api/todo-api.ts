import axios from "axios";

export class TodoApi {
  private static baseUrl: string = "";

  public static LoadTodo = () => {
    return axios.get(TodoApi.baseUrl);
  }

  public static AddTodo = async () => {
    return axios.post(TodoApi.baseUrl);
  }

  public static UpdateTodo = async () => {
    return axios.patch(TodoApi.baseUrl);
  }
}
