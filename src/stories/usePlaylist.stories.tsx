import { usePlaylist, PlaylistTrack, Track, Params } from "../hooks/usePlaylist"
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlaylist",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: string; playlistId: string; params?: Params }
export const Basic: Story<StoryArgs> = ({ playlistId }, context) => {
  const playlist = usePlaylist(context.token, playlistId)
  return (
    <div>
      <h3>{playlist?.name}</h3>
      <ul>
        {playlist?.tracks?.items?.map((item: PlaylistTrack) => {
          const track: Track = item.track!
          return <li key={track.id}>{track.name}</li>
        })}
      </ul>
      <div>
        <pre>{playlist && JSON.stringify(playlist, null, "  ")}</pre>
      </div>
    </div>
  )
}

Basic.args = {
  playlistId: "35g2S0CjBiyZsLJvW90NzC",
}

export const WithParams: Story<StoryArgs> = (
  { playlistId, params },
  context
) => {
  const playlist = usePlaylist(context.token, playlistId, params)
  return (
    <div>
      <h3>{playlist?.name}</h3>
      <ul>
        {playlist?.tracks?.items?.map((item: PlaylistTrack) => {
          const track: Track = item.track!
          return <li key={track.id}>{track.name}</li>
        })}
      </ul>
      <div>
        <pre>{playlist && JSON.stringify(playlist, null, "  ")}</pre>
      </div>
    </div>
  )
}
WithParams.args = {
  playlistId: "35g2S0CjBiyZsLJvW90NzC",
  params: { fields: "name,tracks(items(track(name,id)))" },
}
