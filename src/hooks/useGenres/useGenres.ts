import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Genres, Token } from "../../types"

export type UseGenresParams = OpArgType<
  paths["/recommendations/available-genre-seeds"]["get"]
>

export const useGenres = (token: Token | undefined) => {
  const [genres, setGenres] = useState<Genres | undefined>(undefined)
  const params: UseGenresParams = {}
  useQuery(
    "/recommendations/available-genre-seeds",
    "get",
    token,
    params,
    setGenres,
    ({ genres }) => genres
  )

  return genres
}
