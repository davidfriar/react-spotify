import { useUserProfile, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useUserProfile",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Self: Story<{ token: Token }> = (_args, context) => {
  const userProfile = useUserProfile(context.token)
  return (
    <div>
      <pre>{userProfile && JSON.stringify(userProfile, null, "  ")}</pre>
    </div>
  )
}

export const Other: Story<{ token: string }> = (_args, context) => {
  const user_id = "21bgynixbjwzhp6diaiqkig2a"
  const userProfile = useUserProfile(context.token, user_id)
  return (
    <div>
      <pre>{userProfile && JSON.stringify(userProfile, null, "  ")}</pre>
    </div>
  )
}
