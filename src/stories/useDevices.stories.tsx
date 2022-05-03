import { useDevices, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useDevices",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token }
export const Basic: Story<StoryArgs> = (_args, context) => {
  const devices = useDevices(context.token)
  return (
    <div>
      <pre>{devices && JSON.stringify(devices, null, "  ")}</pre>
    </div>
  )
}
