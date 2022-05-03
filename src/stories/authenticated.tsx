import { Story } from "@storybook/react"
import { useSpotifyAuth, SpotifyAuthOptions } from ".."

export const Authenticated = (Story: Story<{ token: string }>) => {
  const options: SpotifyAuthOptions = {
    redirectURI: process.env.REACT_APP_SPOTIFY_REDIRECT_URL!,
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID!,
    scopes: [
      "streaming",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-top-read",
      "user-read-email",
      "user-read-private",
    ],
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
