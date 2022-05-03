import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Markets, Token } from "../../types"

export type UseMarketsParams = OpArgType<paths["/markets"]["get"]>

export const useMarkets = (token: Token | undefined) => {
  const [markets, setMarkets] = useState<Markets | undefined>(undefined)
  const params: UseMarketsParams = {}
  useQuery(
    "/markets",
    "get",
    token,
    params,
    setMarkets,
    ({ markets }) => markets || []
  )

  return markets
}
