import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { SearchResults, SearchTypes, Token } from "../../types"

export type UseSearchParams = Omit<
  OpArgType<paths["/search"]["get"]>,
  "q" | "type"
>

export const useSearch = (
  token: Token | undefined,
  q: string,
  type: SearchTypes,
  params?: UseSearchParams
) => {
  const [searchResults, setSearchResults] = useState<SearchResults | undefined>(
    undefined
  )
  const commaSeparatedType = [type.join(",")] as SearchTypes // schema doesn't correctly reflect the required type
  useQuery(
    "/search",
    "get",
    token,
    { q, type: commaSeparatedType, ...params },
    setSearchResults
  )

  return searchResults
}
