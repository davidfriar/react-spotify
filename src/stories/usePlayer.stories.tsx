import { usePlayer } from "../hooks/usePlayer"
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlayer",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: string; name: string }
export const Basic: Story<StoryArgs> = ({ name }, context) => {
  const [deviceID, player, paused, active, track] = usePlayer(
    context.token,
    name
  )
  return (
    <div>
      <div>{deviceID}</div>
      <div>
        <div>
          <img src={track?.album.images[0].url} />
          <div>
            <div>{track?.name}</div>
            <div>{track?.artists[0].name}</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          player?.previousTrack()
        }}
      >
        &lt;&lt;
      </button>
      <button
        onClick={() => {
          player?.togglePlay()
        }}
      >
        {paused ? "PLAY" : "PAUSE"}
      </button>
      <button
        onClick={() => {
          player?.nextTrack()
        }}
      >
        &gt;&gt;
      </button>
    </div>
  )
}

Basic.args = {
  name: "My Test Player",
}
