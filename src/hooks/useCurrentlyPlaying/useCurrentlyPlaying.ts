import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { CurrentlyPlayingObject, Token } from "../../types"

export type UseCurrentlyPlayingParams = OpArgType<
  paths["/me/player/currently-playing"]["get"]
>

export const useCurrentlyPlaying = (
  token: Token | undefined,
  params?: UseCurrentlyPlayingParams
) => {
  const [object, setObject] = useState<CurrentlyPlayingObject | undefined>(
    undefined
  )
  useQuery(
    "/me/player/currently-playing",
    "get",
    token,
    { ...params },
    setObject
  )

  return object
}
