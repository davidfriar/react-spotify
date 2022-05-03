import { useAlbumTracks, UseAlbumTracksParams, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useAlbumTracks",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; id: Id; params?: UseAlbumTracksParams }
export const Basic: Story<StoryArgs> = ({ id }, context) => {
  const tracks = useAlbumTracks(context.token, id)
  return (
    <div>
      <pre>{tracks && JSON.stringify(tracks, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  id: "48D1hRORqJq52qsnUYZX56",
}
