import { useTopArtists, UseTopArtistsParams, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useTopArtists",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = {
  token: Token
  params?: UseTopArtistsParams
}
export const Basic: Story<StoryArgs> = ({ params }, context) => {
  const artists = useTopArtists(context.token, params)
  return (
    <div>
      <pre>{artists && JSON.stringify(artists, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  params: {},
}
