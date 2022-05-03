import { usePlaylists, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlaylists",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Self: Story<{ token: Token }> = (_args, context) => {
  const playlists = usePlaylists(context.token)
  return (
    <ul>
      {playlists?.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}

export const Other: Story<{ token: string }> = (_args, context) => {
  const userId = "21bgynixbjwzhp6diaiqkig2a"
  const playlists = usePlaylists(context.token, userId)
  return (
    <ul>
      {playlists?.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}
