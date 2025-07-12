import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_QUESTIONS_QUERY_KEY } from "@/constants/queries";
import { ROOMS_URL } from "@/constants/urls";
import type { CreateQuestionRequest } from "./types/create-question-request";
import type { CreateQuestionResponse } from "./types/create-question-response";
import type { GetRoomQuestionResponse } from "./types/get-room-question-response";

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const url = `${ROOMS_URL}/${roomId}/questions`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result: CreateQuestionResponse = await response.json();
      return result;
    },
    onMutate({ question }) {
      const previousQuestions =
        queryClient.getQueryData<GetRoomQuestionResponse>([
          GET_QUESTIONS_QUERY_KEY,
          roomId,
        ]);

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      if (previousQuestions) {
        queryClient.setQueryData<GetRoomQuestionResponse>(
          [GET_QUESTIONS_QUERY_KEY, roomId],
          (old) => [newQuestion, ...(old || [])]
        );
      }

      return { previousQuestions, newQuestion };
    },
    onSuccess(data, _variables, context) {
      const previousQuestions =
        queryClient.getQueryData<GetRoomQuestionResponse>([
          GET_QUESTIONS_QUERY_KEY,
          roomId,
        ]);

      if (previousQuestions) {
        queryClient.setQueryData<GetRoomQuestionResponse>(
          [GET_QUESTIONS_QUERY_KEY, roomId],
          (old) =>
            old?.map((question) =>
              question.id === context?.newQuestion.id
                ? {
                    ...question,
                    id: data.questionId,
                    answer: data.answer,
                    isGeneratingAnswer: false,
                  }
                : question
            ) || []
        );
      }
    },
    onError(_error, _variables, context) {
      if (context?.previousQuestions) {
        queryClient.setQueryData<GetRoomQuestionResponse>(
          [GET_QUESTIONS_QUERY_KEY, roomId],
          context.previousQuestions
        );
      }
    },
  });
}
