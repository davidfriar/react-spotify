import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Tracks, Id, Token } from "../../types"

export type UseArtistsTopTracksParams = Omit<
  OpArgType<paths["/artists/{id}/top-tracks"]["get"]>,
  "id"
>

export const useArtistsTopTracks = (
  token: Token | undefined,
  id: Id,
  params?: UseArtistsTopTracksParams
) => {
  const [tracks, setTracks] = useState<Tracks | undefined>(undefined)
  useQuery(
    "/artists/{id}/top-tracks",
    "get",
    token,
    { id, ...params },
    setTracks,
    ({ tracks }) => tracks || []
  )

  return tracks
}
