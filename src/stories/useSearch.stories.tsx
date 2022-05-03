import { useSearch, SearchTypes, UseSearchParams, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useSearch",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = {
  token: Token
  q: string
  type: SearchTypes
  params?: UseSearchParams
}
export const Basic: Story<StoryArgs> = ({ q, type, params }, context) => {
  const results = useSearch(context.token, q, type, params)
  return (
    <div>
      <pre>{results && JSON.stringify(results, null, "  ")}</pre>
    </div>
  )
}

Basic.args = {
  q: "The Cure",
  type: ["artist", "album", "track"],
  params: {},
}
