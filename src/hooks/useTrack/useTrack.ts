import { useQuery } from "../useQuery"
import { components, paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"

export type Track = components["schemas"]["TrackObject"]
export type Params = Omit<OpArgType<paths["/tracks/{id}"]["get"]>, "id">

export const useTrack = (
  token: string | undefined,
  id: string,
  params?: Params
) => {
  const [track, setTrack] = useState<Track | undefined>(undefined)
  useQuery("/tracks/{id}", "get", token, { id, ...params }, setTrack)

  return track
}
