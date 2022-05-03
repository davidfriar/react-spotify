import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { TimeRange, Artists, Token } from "../../types"

export type UseTopArtistsParams = OpArgType<paths["/me/top/artists"]["get"]> & {
  time_range?: TimeRange | undefined
}

export const useTopArtists = (
  token: Token | undefined,
  params?: UseTopArtistsParams
) => {
  const [artists, setArtists] = useState<Artists | undefined>(undefined)
  useQuery(
    "/me/top/artists",
    "get",
    token,
    { ...params },
    setArtists,
    ({ items }) => items || []
  )

  return artists
}
