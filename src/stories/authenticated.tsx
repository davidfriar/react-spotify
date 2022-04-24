import { Story } from "@storybook/react"
import { useSpotifyAuth, SpotifyAuthOptions } from "../hooks/useSpotifyAuth"

export const Authenticated = (Story: Story<{ token: string }>) => {
  const options: SpotifyAuthOptions = {
    redirectURI: process.env.REACT_APP_SPOTIFY_REDIRECT_URL!,
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID!,
    scopes: ["streaming"],
  }
  const { token, getToken } = useSpotifyAuth(options)
  return (
    <div>
      {token ? (
        <Story token={token} />
      ) : (
        <div>
          This story requires an authenticated user
          <button onClick={getToken}>log in</button>
        </div>
      )}
    </div>
  )
}
