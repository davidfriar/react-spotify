import { SpotifyCallback, SpotifyAuthOptions } from ".."
import { Story } from "@storybook/react"

export default {
  title: "SpotifyCallback",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const Template: Story = () => {
  const options: SpotifyAuthOptions = {
    redirectURI: process.env.REACT_APP_SPOTIFY_REDIRECT_URL!,
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID!,
    scopes: ["streaming"],
  }

  return <SpotifyCallback options={options} />
}

export const Basic = Template.bind({})
