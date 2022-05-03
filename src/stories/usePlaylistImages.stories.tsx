import { usePlaylistImages, Id, Token } from ".."
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "usePlaylistImages",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: Token; playlistId: Id }
export const Basic: Story<StoryArgs> = ({ playlistId }, context) => {
  const playlistImages = usePlaylistImages(context.token, playlistId)
  return (
    <div>
      <div>
        <ul>
          {playlistImages?.map((image) => (
            <li key={image.url}>
              <img
                src={image.url}
                alt=""
                height={image.height!}
                width={image.width!}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <pre>
          {playlistImages && JSON.stringify(playlistImages, null, "  ")}
        </pre>
      </div>
    </div>
  )
}

Basic.args = {
  playlistId: "35g2S0CjBiyZsLJvW90NzC",
}
