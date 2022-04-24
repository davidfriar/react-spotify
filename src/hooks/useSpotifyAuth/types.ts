import { Dispatch, SetStateAction } from "react"

export type SpotifyAuthOptions = {
  clientId: string
  redirectURI: string
  scopes?: SpotifyScope[]
}

export type SpotifyScope =
  | "ugc-image-upload"
  | "user-modify-playback-state"
  | "user-read-playback-state"
  | "user-read-currently-playing"
  | "user-follow-modify"
  | "user-follow-read"
  | "user-read-recently-played"
  | "user-read-playback-position"
  | "user-top-read"
  | "playlist-read-collaborative"
  | "playlist-modify-public"
  | "playlist-read-private"
  | "playlist-modify-private"
  | "app-remote-control"
  | "streaming"
  | "user-read-email"
  | "user-read-private"
  | "user-library-modify"
  | "user-library-read"

export type SpotifyTokens = {
  access_token: string
  expires: string
  refresh_token: string
  scopes: SpotifyScope[]
}

export type SetValue<T> = Dispatch<SetStateAction<T>>
