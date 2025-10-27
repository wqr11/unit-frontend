import { $httpHost } from "@/shared/api";
import {
  CreateLabsParams,
  CreateLabsResult,
  GetLabByIdResult,
  GetLabsResult,
  TestLabsParams,
  TestLabsResult,
  UpdateLabsParams,
  UpdateLabsResult,
} from "./types";

export class LabsApi {
  static async getById(id: string) {
    const { data } = await $httpHost.get<GetLabByIdResult>(`/labs/${id}`);
    return data;
  }

  static async list() {
    const { data } = await $httpHost.get<GetLabsResult>("/labs");
    return data;
  }

  static async create(params: CreateLabsParams) {
    const { data } = await $httpHost.post<CreateLabsResult>("/labs", params);
    return data;
  }

  static async update({ id, ...params }: UpdateLabsParams) {
    const { data } = await $httpHost.patch<UpdateLabsResult>(
      `/labs/${id}`,
      params
    );
    return data;
  }

  static async delete(id: string) {
    const { data } = await $httpHost.delete<void>(`/labs/${id}`);
    return data;
  }

  static async test({ id, ...params }: TestLabsParams) {
    const { data } = await $httpHost.post<TestLabsResult>(
      `/labs/${id}/test`,
      params
    );
    return data;
  }
}

export * from "./types";
