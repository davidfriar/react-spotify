import { useRecommendations, UseRecommendationsParams, Ids, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useRecommendations",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = {
  token: Token
  seed_artists: Ids
  seed_genres: Ids
  seed_tracks: Ids
  params?: UseRecommendationsParams
}
export const Basic: Story<StoryArgs> = (
  { seed_artists, seed_genres, seed_tracks, params },
  context
) => {
  const recommendations = useRecommendations(
    context.token,
    seed_artists,
    seed_genres,
    seed_tracks,
    params
  )
  return (
    <div>
      <pre>
        {recommendations && JSON.stringify(recommendations, null, "  ")}
      </pre>
    </div>
  )
}

Basic.args = {
  seed_tracks: ["5CKHhg31HcYYhwUeeGqvhq"],
  seed_artists: [],
  seed_genres: [],
  params: {},
}
