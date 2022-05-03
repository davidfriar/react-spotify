import { useCurrentlyPlaying, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useCurrentlyPlaying",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token }
export const Basic: Story<StoryArgs> = (_args, context) => {
  const trackOrEpisode = useCurrentlyPlaying(context.token)
  return (
    <div>
      <pre>{trackOrEpisode && JSON.stringify(trackOrEpisode, null, "  ")}</pre>
    </div>
  )
}
