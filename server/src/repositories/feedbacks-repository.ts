export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepositoty {
  create: (data: FeedbackCreateData) => Promise<void>;
}