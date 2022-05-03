import { useTracks, UseTracksParams, Ids, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useTracks",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; ids: Ids; params?: UseTracksParams }
export const Basic: Story<StoryArgs> = ({ ids }, context) => {
  const track = useTracks(context.token, ids)
  return (
    <div>
      <pre>{track && JSON.stringify(track, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  ids: ["2RsAajgo0g7bMCHxwH3Sk0", "4MXT19ft9YQLhnrnZ8mUr9"],
}
