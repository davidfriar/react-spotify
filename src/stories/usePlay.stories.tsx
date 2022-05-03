import { usePlayer } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlay",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: string; name: string }
export const Basic: Story<StoryArgs> = ({ name }, context) => {
  const { deviceId, track, controls } = usePlayer(context.token, name)
  return (
    <div>
      <div>{deviceId}</div>
      <div>
        <div>
          <img src={track?.album.images[0].url} />
          <div>
            <div>{track?.name}</div>
            <div>{track?.artists[0].name}</div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(`onClick... deviceID: ${deviceId}`)
            controls.play({
              context_uri: "spotify:playlist:6cLmsZzpUopHj686U0GQcC",
            })
          }}
        >
          Play
        </button>
        <button onClick={() => controls.previous()}>Previous</button>
        <button onClick={() => controls.next()}>Next</button>
      </div>
    </div>
  )
}

Basic.args = {
  name: "My Test Player",
}
