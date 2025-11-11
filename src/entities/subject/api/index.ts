import { $httpHost } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { Subject } from "./types";

export class SubjectApi {
  static async list() {
    return await $httpHost.get<Subject[]>(`${API_URL}/subjects`);
  }
}

export * from "./types";
