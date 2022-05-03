import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Tracks, Ids, Token } from "../../types"
import { commaSeparated } from "../../util"

export type UseTracksParams = Omit<OpArgType<paths["/tracks"]["get"]>, "ids">

export const useTracks = (
  token: Token | undefined,
  ids: Ids,
  params?: UseTracksParams
) => {
  const [tracks, setTracks] = useState<Tracks | undefined>(undefined)
  useQuery(
    "/tracks",
    "get",
    token,
    { ids: commaSeparated(ids), ...params },
    setTracks,
    ({ tracks }) => tracks || []
  )

  return tracks
}
