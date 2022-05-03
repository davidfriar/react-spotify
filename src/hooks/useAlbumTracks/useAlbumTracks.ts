import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { SimpleTracks, Id, Token } from "../../types"

export type UseAlbumTracksParams = Omit<
  OpArgType<paths["/albums/{id}/tracks"]["get"]>,
  "id"
>

export const useAlbumTracks = (
  token: Token | undefined,
  id: Id,
  params?: UseAlbumTracksParams
) => {
  const [tracks, setTracks] = useState<SimpleTracks | undefined>(undefined)
  useQuery(
    "/albums/{id}/tracks",
    "get",
    token,
    { id, ...params },
    setTracks,
    ({ items }) => items || []
  )

  return tracks
}
