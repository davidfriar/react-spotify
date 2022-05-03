import { useTopTracks, UseTopTracksParams, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useTopTracks",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = {
  token: Token
  params?: UseTopTracksParams
}
export const Basic: Story<StoryArgs> = ({ params }, context) => {
  const tracks = useTopTracks(context.token, params)
  return (
    <div>
      <pre>{tracks && JSON.stringify(tracks, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  params: {},
}
