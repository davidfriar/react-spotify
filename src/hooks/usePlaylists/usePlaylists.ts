import { useQuery } from "../useQuery"
import { components } from "../../schema"
import { useState } from "react"

export type Playlist = components["schemas"]["SimplifiedPlaylistObject"]

export const usePlaylists = (token: string | undefined, user_id?: string) => {
  const [playlists, setPlaylists] = useState<Playlist[] | undefined>(undefined)
  const path = user_id ? "/users/{user_id}/playlists" : "/me/playlists"
  const params: {} | { user_id: string } = user_id ? { user_id } : {}
  useQuery(path, "get", token, params, setPlaylists, ({ items }) => items)
  return playlists
}
