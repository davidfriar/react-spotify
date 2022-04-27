import type { paths } from "../../schema"

import {
  Fetcher,
  Middleware,
  OpArgType,
  OpReturnType,
} from "openapi-typescript-fetch"

import { SetValue } from "../useSpotifyAuth/types"
import { useEffect } from "react"

const logger: Middleware = async (url, init, next) => {
  console.log(`fetching ${url}, ${JSON.stringify(init, null, "  ")}`)
  const response = await next(url, init)
  console.log(`fetched ${url}`)
  return response
}

const configureFetcher = (token: string | undefined) => {
  const fetcher = Fetcher.for<paths>()
  fetcher.configure({
    baseUrl: "https://api.spotify.com/v1",
    init: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
    use: [logger],
  })
  return fetcher
}

export type Extractor<TReturnType, TResult> = (arg: TReturnType) => TResult

export async function executeQuery<
  TPath extends keyof paths,
  TMethod extends keyof paths[TPath]
>(
  path: TPath,
  method: TMethod,
  token: string | undefined,
  params: OpArgType<paths[TPath][TMethod]>
) {
  const fetcher = configureFetcher(token).path(path).method(method).create()
  try {
    const result = await fetcher(params)
    return result.data
  } catch (e) {
    if (e instanceof fetcher.Error) {
      const error = e.getActualType()
      console.error(`Request for ${path} returned status: ${error.status}`)
      console.error(error.data)
    }
  }
}

export function useQuery<
  TPath extends keyof paths,
  TMethod extends keyof paths[TPath],
  TResult
>(
  path: TPath,
  method: TMethod,
  token: string | undefined,
  params: OpArgType<paths[TPath][TMethod]>,
  setValue?: SetValue<TResult | undefined>,
  extractor?: Extractor<OpReturnType<paths[TPath][TMethod]>, TResult>
): void {
  const paramString = JSON.stringify(params)
  useEffect(() => {
    ;(async () => {
      if (token) {
        const data = await executeQuery(path, method, token, params)
        if (data) {
          const value = extractor ? extractor(data) : (data as TResult)
          if (setValue) {
            setValue(value)
          }
        }
      }
    })()
  }, [token, paramString])
}
