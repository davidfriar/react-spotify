import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"

import { TimeRange, Tracks, Token } from "../../types"

export type UseTopTracksParams = OpArgType<paths["/me/top/tracks"]["get"]> & {
  time_range?: TimeRange | undefined
}

export const useTopTracks = (
  token: Token | undefined,
  params?: UseTopTracksParams
) => {
  const [tracks, setTracks] = useState<Tracks | undefined>(undefined)
  useQuery(
    "/me/top/tracks",
    "get",
    token,
    { ...params },
    setTracks,
    ({ items }) => items || []
  )

  return tracks
}
