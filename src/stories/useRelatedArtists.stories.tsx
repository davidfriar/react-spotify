import { useRelatedArtists, UseRelatedArtistsParams, Token, Id } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useRelatedArtists",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; id: Id; params?: UseRelatedArtistsParams }
export const Basic: Story<StoryArgs> = ({ id }, context) => {
  const artists = useRelatedArtists(context.token, id)
  return (
    <div>
      <pre>{artists && JSON.stringify(artists, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  id: "6olE6TJLqED3rqDCT0FyPh",
}
