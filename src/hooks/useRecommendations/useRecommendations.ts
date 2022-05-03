import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Tracks, Ids, Token } from "../../types"
import { commaSeparated } from "../../util"

export type UseRecommendationsParams = Omit<
  OpArgType<paths["/recommendations"]["get"]>,
  "seed_artists" | "seed_genres" | "seed_tracks"
>

export const useRecommendations = (
  token: Token | undefined,
  seedArtists: Ids,
  seedGenres: Ids,
  seedTracks: Ids,
  params?: UseRecommendationsParams
) => {
  const [tracks, setTracks] = useState<Tracks | undefined>(undefined)
  useQuery(
    "/recommendations",
    "get",
    token,
    {
      seed_artists: commaSeparated(seedArtists),
      seed_genres: commaSeparated(seedGenres),
      seed_tracks: commaSeparated(seedTracks),
      ...params,
    },
    setTracks,
    ({ tracks }) => tracks || []
  )

  return tracks
}
