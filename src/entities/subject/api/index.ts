import { $httpHost } from "@/shared/api";
import { Subject, SubjectCreateParams } from "./types";

export class SubjectApi {
  static async list() {
    return await $httpHost.get<Subject[]>("/subjects");
  }

  static async create(params: SubjectCreateParams) {
    return await $httpHost.post("/subjects", params);
  }
}

export * from "./types";
