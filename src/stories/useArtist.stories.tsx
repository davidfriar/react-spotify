import { useArtist, UseArtistParams, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useArtist",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; id: Id; params?: UseArtistParams }
export const Basic: Story<StoryArgs> = ({ id }, context) => {
  const artist = useArtist(context.token, id)
  return (
    <div>
      <pre>{artist && JSON.stringify(artist, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  id: "6olE6TJLqED3rqDCT0FyPh",
}
