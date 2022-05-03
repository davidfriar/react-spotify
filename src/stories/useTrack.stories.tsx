import { useTrack, UseTrackParams, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useTrack",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; id: Id; params?: UseTrackParams }
export const Basic: Story<StoryArgs> = ({ id }, context) => {
  const track = useTrack(context.token, id)
  return (
    <div>
      <h3>{track?.name}</h3>

      <div>
        <pre>{track && JSON.stringify(track, null, "  ")}</pre>
      </div>
    </div>
  )
}

Basic.args = {
  id: "2RsAajgo0g7bMCHxwH3Sk0",
}
