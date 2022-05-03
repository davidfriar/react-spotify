import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Playlist, Id, Token } from "../../types"

export type UsePlaylistParams = Omit<
  OpArgType<paths["/playlists/{playlist_id}"]["get"]>,
  "playlist_id"
>

export const usePlaylist = (
  token: Token | undefined,
  playlistId: Id,
  params?: UsePlaylistParams
) => {
  const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined)
  useQuery(
    "/playlists/{playlist_id}",
    "get",
    token,
    { playlist_id: playlistId, ...params },
    setPlaylist
  )

  return playlist
}
