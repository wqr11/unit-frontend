export interface Subject {
  id: string;
  name: string;
  pass_key?: string;
  author_id: string;
}

export interface SubjectCreateParams {
  name: string;
  pass_key: string;
}
