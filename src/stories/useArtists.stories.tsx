import { useArtists, Ids, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useArtists",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; ids: Ids }
export const Basic: Story<StoryArgs> = ({ ids }, context) => {
  const artists = useArtists(context.token, ids)
  return (
    <div>
      <pre>{artists && JSON.stringify(artists, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  ids: ["0oSGxfWSnnOXhD2fKuz2Gy", "36QJpDe2go2KgaRleHCDTp"],
}
