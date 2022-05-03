import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Images, Id, Token } from "../../types"

export type UsePlaylistImagesParams = Omit<
  OpArgType<paths["/playlists/{playlist_id}/images"]["get"]>,
  "playlist_id"
>

export const usePlaylistImages = (token: Token | undefined, playlistId: Id) => {
  const params: UsePlaylistImagesParams = {}
  const [images, setImages] = useState<Images | undefined>(undefined)
  useQuery(
    "/playlists/{playlist_id}/images",
    "get",
    token,
    { playlist_id: playlistId, ...params },
    setImages
  )

  return images
}
