import { ILab } from "..";

export type GetLabByIdResult = ILab;

export type GetLabsResult = ILab[];

export interface CreateLabsParams {
  data_input: string;
  data_output: string;
  comment_for_ai: string;
}

export interface CreateLabsResult extends CreateLabsParams {
  id: string;
}

export type UpdateLabsParams = ILab;
export type UpdateLabsResult = ILab;

export interface TestLabsParams {
  id: string;
  student_code: string; // Student's solution for a lab
}

export interface TestLabsResult {
  correct: boolean;
  passed_tests: number;
  total_tests: number;
  success_rate: number;
  errors: []; // @TODO: Add type later
  logs: string[];
  detailed_results: [
    {
      test_number: number;
      correct: boolean;
      input: string;
      expected_output: string;
      actual_output: string;
      error: string;
      log: string;
      diff: string;
    }
  ];
}
