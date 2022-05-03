import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Artists, Id, Token } from "../../types"

export type UseRelatedArtistsParams = Omit<
  OpArgType<paths["/artists/{id}/related-artists"]["get"]>,
  "id"
>

export const useRelatedArtists = (token: Token | undefined, id: Id) => {
  const params: UseRelatedArtistsParams = {}
  const [artists, setArtists] = useState<Artists | undefined>(undefined)
  useQuery(
    "/artists/{id}/related-artists",
    "get",
    token,
    { id, ...params },
    setArtists,
    ({ artists }) => artists || []
  )

  return artists
}
