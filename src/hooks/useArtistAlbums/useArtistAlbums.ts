import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { SimpleAlbums, Id, Token } from "../../types"

export type UseArtistAlbumsParams = Omit<
  OpArgType<paths["/artists/{id}/albums"]["get"]>,
  "id"
>

export const useArtistAlbums = (
  token: Token | undefined,
  id: Id,
  params?: UseArtistAlbumsParams
) => {
  const [albums, setAlbums] = useState<SimpleAlbums | undefined>(undefined)
  useQuery(
    "/artists/{id}/albums",
    "get",
    token,
    { id, ...params },
    setAlbums,
    ({ items }) => items || []
  )

  return albums
}
