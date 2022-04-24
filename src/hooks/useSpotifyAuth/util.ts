import { SetValue, SpotifyTokens } from "./types"

export const generateRandomString = (length: number = 43) => {
  let text = ""
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export async function generateCodeChallenge(codeVerifier: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(codeVerifier)
  )
  return window
    .btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
}

export async function processTokenResponse(
  response: Response,
  setTokens: SetValue<SpotifyTokens | undefined>
) {
  const result = await response.json()
  console.log("result:", result)
  const t = new Date()
  t.setSeconds(t.getSeconds() + result.expires_in)
  const tokens = {
    access_token: result.access_token,
    expires: t.toString(),
    refresh_token: result.refresh_token,
    scopes: result.scope?.split(" "),
  }
  setTokens(tokens)
  return tokens
}
