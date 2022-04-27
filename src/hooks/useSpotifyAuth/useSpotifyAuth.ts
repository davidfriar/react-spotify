import { useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"
import {
  generateRandomString,
  generateCodeChallenge,
  processTokenResponse,
} from "./util"
import {
  authorizeURL,
  tokenURL,
  response_type,
  code_challenge_method,
  storageKeys,
} from "./consts"
import { SpotifyAuthOptions, SpotifyTokens, SetValue } from "./types"

export type { SpotifyAuthOptions, SpotifyScope } from "./types"

const authorize = async (
  codeVerifier: string,
  state: string,
  options: SpotifyAuthOptions
) => {
  const code_challenge = await generateCodeChallenge(codeVerifier)
  const params = new URLSearchParams({
    client_id: options.clientId,
    response_type,
    redirect_uri: options.redirectURI,
    state,
    code_challenge_method,
    code_challenge,
  })
  if (options.scopes) {
    params.append("scope", options.scopes.join(" "))
  }
  const url = authorizeURL + "?" + params.toString()
  console.log(url)
  // window.location.href = url
  window.open(url)
}

async function refreshTokenIfNecessary(
  tokens: SpotifyTokens,
  setTokens: SetValue<SpotifyTokens | undefined>,
  options: SpotifyAuthOptions
) {
  const expiry = new Date(tokens.expires)
  if (expiry > new Date()) {
    console.log("token is valid")
    return tokens
  }
  console.log("refreshing token")
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: tokens.refresh_token,
    client_id: options.clientId,
  })
  console.log(params.toString())

  const response = await fetch(tokenURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: params,
  })
  if (response.ok) {
    return processTokenResponse(response, setTokens)
  } else {
    console.log(response)
    console.log(await response.text())
    return undefined
  }
}

export const useSpotifyAuth = (options: SpotifyAuthOptions) => {
  const [tokens, setTokens] = useLocalStorage<SpotifyTokens | undefined>(
    storageKeys.tokens,
    undefined
  )
  const [, setVerifier] = useLocalStorage<string>(storageKeys.verifier, "")
  const [, setState] = useLocalStorage<string>(storageKeys.state, "")

  const getToken = () => {
    const verifier = generateRandomString()
    setVerifier(verifier)
    const state = generateRandomString()
    setState(state)
    authorize(verifier, state, options)
  }

  const logout = () => {
    setTokens(undefined)
  }

  useEffect(() => {
    if (tokens) {
      refreshTokenIfNecessary(tokens, setTokens, options)
    }
  }, [options])

  return {
    token: tokens?.access_token,
    getToken,
    logout,
    scopes: tokens?.scopes,
  }
}
