import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Track, Id, Token } from "../../types"

export type UseTrackParams = Omit<OpArgType<paths["/tracks/{id}"]["get"]>, "id">

export const useTrack = (
  token: Token | undefined,
  id: Id,
  params?: UseTrackParams
) => {
  const [track, setTrack] = useState<Track | undefined>(undefined)
  useQuery("/tracks/{id}", "get", token, { id, ...params }, setTrack)

  return track
}
