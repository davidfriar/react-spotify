import { useQuery } from "../useQuery"
import { components, paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"

export type Playlist = components["schemas"]["PlaylistObject"]
export type PlaylistTrack = components["schemas"]["PlaylistTrackObject"]
export type Track = components["schemas"]["TrackObject"]

export type Params = Omit<
  OpArgType<paths["/playlists/{playlist_id}"]["get"]>,
  "playlist_id"
>

export const usePlaylist = (
  token: string | undefined,
  playlist_id: string,
  params?: Params
) => {
  const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined)
  useQuery(
    "/playlists/{playlist_id}",
    "get",
    token,
    { playlist_id, ...params },
    setPlaylist
  )

  return playlist
}
