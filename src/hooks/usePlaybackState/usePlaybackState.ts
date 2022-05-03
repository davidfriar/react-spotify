import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { PlaybackState, Token } from "../../types"

export type UsePlaybackStateParams = OpArgType<paths["/me/player"]["get"]>

export const usePlaybackState = (
  token: Token | undefined,
  params?: UsePlaybackStateParams
) => {
  const [playbackState, setPlaybackState] = useState<PlaybackState | undefined>(
    undefined
  )
  useQuery("/me/player", "get", token, { ...params }, setPlaybackState)

  return playbackState
}
