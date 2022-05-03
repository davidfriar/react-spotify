import { useMarkets, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useMarkets",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token }
export const Basic: Story<StoryArgs> = (_args, context) => {
  const markets = useMarkets(context.token)
  return (
    <div>
      <pre>{markets && JSON.stringify(markets, null, "  ")}</pre>
    </div>
  )
}
