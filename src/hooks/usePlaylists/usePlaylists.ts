import { useQuery } from "../useQuery"
import { useState } from "react"
import { Playlists, Id, Token } from "../../types"

export const usePlaylists = (token: Token | undefined, userId?: string) => {
  const [playlists, setPlaylists] = useState<Playlists | undefined>(undefined)
  const path = userId ? "/users/{user_id}/playlists" : "/me/playlists"
  const params: {} | { user_id: Id } = userId ? { user_id: userId } : {}
  useQuery(path, "get", token, params, setPlaylists, ({ items }) => items)
  return playlists
}
