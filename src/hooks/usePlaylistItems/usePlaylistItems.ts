import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { PlaylistItems, PlaylistTrackObject, Id, Token } from "../../types"

export type UsePlaylistItemsParams = Omit<
  OpArgType<paths["/playlists/{playlist_id}/tracks"]["get"]>,
  "playlist_id"
>

export const usePlaylistItems = (
  token: Token | undefined,
  playlistId: Id,
  params?: UsePlaylistItemsParams
) => {
  const [items, setItems] = useState<PlaylistItems | undefined>(undefined)
  useQuery(
    "/playlists/{playlist_id}/tracks",
    "get",
    token,
    { playlist_id: playlistId, ...params },
    setItems,
    ({ items }) => items.map((item: PlaylistTrackObject) => item.track!)
  )

  return items
}
