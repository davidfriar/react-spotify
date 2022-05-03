import { useArtistsTopTracks, UseArtistsTopTracksParams, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useArtistsTopTracks",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; id: Id; params?: UseArtistsTopTracksParams }
export const Basic: Story<StoryArgs> = ({ id, params }, context) => {
  const tracks = useArtistsTopTracks(context.token, id, params)
  return (
    <div>
      <pre>{tracks && JSON.stringify(tracks, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  id: "3RGLhK1IP9jnYFH4BRFJBS",
  params: { market: "GB" },
  // for some reason Spotify seems to think market is required,
  // even though it says otherwise in the documentation
}
