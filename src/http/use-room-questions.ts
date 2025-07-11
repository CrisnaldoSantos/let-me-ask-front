import { useQuery } from "@tanstack/react-query";
import { GET_QUESTIONS_QUERY_KEY } from "@/constants/queries";
import { ROOMS_URL } from "@/constants/urls";
import type { GetRoomQuestionResponse } from "./types/get-room-question-response";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: [GET_QUESTIONS_QUERY_KEY, roomId],
    queryFn: async () => {
      const response = await fetch(`${ROOMS_URL}/${roomId}/questions`);
      const result: GetRoomQuestionResponse = await response.json();
      return result;
    },
  });
}
