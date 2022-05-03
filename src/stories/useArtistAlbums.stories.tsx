import { useArtistAlbums, UseArtistAlbumsParams, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useArtistAlbums",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; id: Id; params?: UseArtistAlbumsParams }
export const Basic: Story<StoryArgs> = ({ id }, context) => {
  const albums = useArtistAlbums(context.token, id)
  return (
    <div>
      <pre>{albums && JSON.stringify(albums, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  id: "6olE6TJLqED3rqDCT0FyPh",
}
