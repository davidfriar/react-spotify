import { usePlaylists } from "../hooks/usePlaylists"
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlaylists",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Self: Story<{ token: string }> = (args, context) => {
  const playlists = usePlaylists(context.token)
  return (
    <ul>
      {playlists?.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}

export const Other: Story<{ token: string }> = (args, context) => {
  const user_id = "21bgynixbjwzhp6diaiqkig2a"
  const playlists = usePlaylists(context.token, user_id)
  return (
    <ul>
      {playlists?.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}
