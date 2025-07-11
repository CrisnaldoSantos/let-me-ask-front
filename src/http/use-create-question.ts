import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_QUESTIONS_QUERY_KEY } from "@/constants/queries";
import { ROOMS_URL } from "@/constants/urls";
import type { CreateQuestionRequest } from "./types/create-question-request";
import type { CreateQuestionResponse } from "./types/create-question-response";

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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_QUESTIONS_QUERY_KEY, roomId],
      });
    },
  });
}
