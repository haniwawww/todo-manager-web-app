import axios from "axios";
import {TypeTodoTask} from "~/types/TypeTodoTask";

export class TaskApi {
  private static baseUrl = (userId: string): string => `http://localhost:8080/users/${userId}/tasks`;

  public static LoadTasks = (userId: string): Promise<TypeTodoTask[]> => {
    return axios.get(TaskApi.baseUrl(userId));
  }

  public static LoadTask = (userId: string, taskId: string): Promise<TypeTodoTask> => {
    return axios.get(TaskApi.baseUrl(userId) + `/${taskId}`);
  }

  public static AddTodo = (userId: string, data: Omit<TypeTodoTask, "id">): Promise<TypeTodoTask> => {
    return axios.post(TaskApi.baseUrl(userId), data);
  }

  public static UpdateTodo = (userId: string, taskId: string, data: Omit<TypeTodoTask, "id">): Promise<TypeTodoTask> => {
    return axios.patch(TaskApi.baseUrl(userId) + `/${taskId}`, data);
  }

  public static DeleteTodo = (userId: string, taskId: string): Promise<void> => {
    return axios.delete(TaskApi.baseUrl(userId) + `/${taskId}`);
  }
}
