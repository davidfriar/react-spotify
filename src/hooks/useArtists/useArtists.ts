import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Artists, Ids, Token } from "../../types"
import { commaSeparated } from "../../util"

export type UseArtistsParams = Omit<OpArgType<paths["/artists"]["get"]>, "ids">

export const useArtists = (token: Token | undefined, ids: Ids) => {
  const params: UseArtistsParams = {}
  const [artists, setArtists] = useState<Artists | undefined>(undefined)
  useQuery(
    "/artists",
    "get",
    token,
    { ids: commaSeparated(ids), ...params },
    setArtists,
    ({ artists }) => artists || []
  )

  return artists
}
