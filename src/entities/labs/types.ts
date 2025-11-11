import { TestLabsResult } from ".";

export interface ILab {
  data_input: string;
  data_output: string;
  subject_id: string;
  id: string;
  name: string;
  comment_for_ai: string;
}

export interface ILabTestResult extends TestLabsResult {
  id: string; // Lab id
}
