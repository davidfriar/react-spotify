import { useAlbums, UseAlbumsParams, Token, Ids } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useAlbums",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; ids: Ids; params?: UseAlbumsParams }
export const Basic: Story<StoryArgs> = ({ ids }, context) => {
  const albums = useAlbums(context.token, ids)
  return (
    <div>
      <pre>{albums && JSON.stringify(albums, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  ids: ["48D1hRORqJq52qsnUYZX56", "4I5zzKYd2SKDgZ9DRf5LVk"],
}
