import { usePlaylistItems, UsePlaylistItemsParams, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlaylistItems",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = {
  token: Token
  playlistId: Id
  params?: UsePlaylistItemsParams
}
export const Basic: Story<StoryArgs> = ({ playlistId }, context) => {
  const playlistItems = usePlaylistItems(context.token, playlistId)
  return (
    <div>
      <pre>{playlistItems && JSON.stringify(playlistItems, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  playlistId: "35g2S0CjBiyZsLJvW90NzC",
}
