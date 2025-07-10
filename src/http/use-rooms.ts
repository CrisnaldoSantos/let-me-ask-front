import { useQuery } from "@tanstack/react-query";
import { GET_ROOMS_QUERY_KEY } from "@/constants/queries";
import { ROOMS_URL } from "@/constants/urls";
import type { GetRoomsAPIResponse } from "./types/get-rooms-response";

export function useRooms() {
  return useQuery({
    queryKey: [GET_ROOMS_QUERY_KEY],
    queryFn: async () => {
      const response = await fetch(ROOMS_URL);
      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });
}
