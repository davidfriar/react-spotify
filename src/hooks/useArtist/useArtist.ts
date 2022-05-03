import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Artist, Id } from "../../types"

export type UseArtistParams = Omit<
  OpArgType<paths["/artists/{id}"]["get"]>,
  "id"
>

export const useArtist = (token: string | undefined, id: Id) => {
  const params: UseArtistParams = {}
  const [artist, setArtist] = useState<Artist | undefined>(undefined)
  useQuery("/artists/{id}", "get", token, { id, ...params }, setArtist)

  return artist
}
