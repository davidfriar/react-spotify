import { useQuery } from "../useQuery"
import { components, paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"

export type Album = components["schemas"]["AlbumObject"]
export type Track = components["schemas"]["SimplifiedTrackObject"]
export type Params = Omit<OpArgType<paths["/albums/{id}"]["get"]>, "id">

export const useAlbum = (
  token: string | undefined,
  id: string,
  params?: Params
) => {
  const [album, setAlbum] = useState<Album | undefined>(undefined)
  useQuery("/albums/{id}", "get", token, { id, ...params }, setAlbum)

  return album
}
