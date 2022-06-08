import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepositoty } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepositoty {
   async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });
  }
}