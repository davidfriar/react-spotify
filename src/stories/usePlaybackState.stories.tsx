import { usePlaybackState, UsePlaybackStateParams, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlaybackState",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; params?: UsePlaybackStateParams }
export const Basic: Story<StoryArgs> = (_args, context) => {
  const playbackState = usePlaybackState(context.token)
  return (
    <div>
      <pre>{playbackState && JSON.stringify(playbackState, null, "  ")}</pre>
    </div>
  )
}
