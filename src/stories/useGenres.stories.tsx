import { useGenres, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useGenres",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token }
export const Basic: Story<StoryArgs> = (_args, context) => {
  const genres = useGenres(context.token)
  return (
    <div>
      <pre>{genres && JSON.stringify(genres, null, "  ")}</pre>
    </div>
  )
}
