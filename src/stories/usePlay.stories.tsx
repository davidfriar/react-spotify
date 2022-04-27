import { usePlayer, play, useNext, usePrevious } from "../hooks/usePlayer"
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
  const [deviceID, , , , track] = usePlayer(context.token, name)
  const next = useNext(context.token, deviceID)
  const previous = usePrevious(context.token, deviceID)
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
      <div>
        <button
          onClick={() => {
            console.log(`onClick... deviceID: ${deviceID}`)
            play(context.token, {
              context_uri: "spotify:playlist:6cLmsZzpUopHj686U0GQcC",
            })
          }}
        >
          Play
        </button>
        <button onClick={() => previous()}>Previous</button>
        <button onClick={() => next()}>Next</button>
      </div>
    </div>
  )
}

Basic.args = {
  name: "My Test Player",
}
