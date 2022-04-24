import { SpotifyAuthOptions, SpotifyTokens } from "./types"
import { storageKeys, tokenURL } from "./consts"
import { processTokenResponse } from "./util"
import { useLocalStorage } from "usehooks-ts"
import { useEffect } from "react"

type SpotifyCallbackProps = { options: SpotifyAuthOptions }
export const SpotifyCallback = ({ options }: SpotifyCallbackProps) => {
  const [code_verifier] = useLocalStorage<string>(storageKeys.verifier, "")
  const [storedState] = useLocalStorage<string>(storageKeys.state, "")
  const [, setTokens] = useLocalStorage<SpotifyTokens | undefined>(
    storageKeys.tokens,
    undefined
  )

  useEffect(() => {
    ;(async () => {
      const url = new URL(window.location.href)
      const state = url.searchParams.get("state")!
      const code = url.searchParams.get("code")!
      if (state !== storedState) {
        throw new Error(
          "SpotifyCallback received a state which does not match stored state"
        )
      }
      if (!code) {
        console.log(
          "Code was not returned from authorize, probably because user cancelled"
        )
        window.close()
      }

      const params = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: options.redirectURI,
        client_id: options.clientId,
        code_verifier: code_verifier!,
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
        await processTokenResponse(response, setTokens)
        window.close()
      } else {
        console.log(response)
      }
    })()
  }, [options, code_verifier])

  return null
}
