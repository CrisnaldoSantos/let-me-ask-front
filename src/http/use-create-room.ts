import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_ROOMS_QUERY_KEY } from "@/constants/queries";
import { ROOMS_URL } from "@/constants/urls";
import type { CreateRoomRequest } from "./types/create-room-request";
import type { CreateRoomResponse } from "./types/create-room-response";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch(ROOMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result: CreateRoomResponse = await response.json();
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ROOMS_QUERY_KEY] });
    },
  });
}
