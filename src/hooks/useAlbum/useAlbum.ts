import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Album, Id, Token } from "../../types"

export type UseAlbumParams = Omit<OpArgType<paths["/albums/{id}"]["get"]>, "id">

export const useAlbum = (
  token: Token | undefined,
  id: Id,
  params?: UseAlbumParams
) => {
  const [album, setAlbum] = useState<Album | undefined>(undefined)
  useQuery("/albums/{id}", "get", token, { id, ...params }, setAlbum)

  return album
}
