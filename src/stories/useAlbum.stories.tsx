import { useAlbum, Params, Track } from "../hooks/useAlbum"
import { Story } from "@storybook/react"
import { Authenticated } from "./authenticated"

export default {
  title: "useAlbum",
  decorators: [Authenticated],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
type StoryArgs = { token: string; id: string; params?: Params }
export const Basic: Story<StoryArgs> = ({ id }, context) => {
  const album = useAlbum(context.token, id)
  return (
    <div>
      <h3>{album?.name}</h3>
      {album?.artists?.map((artist) => (
        <p>{artist.name}</p>
      ))}
      <ul>
        {album?.tracks?.items.map((track: Track) => (
          <li>{track.name}</li>
        ))}
      </ul>

      <div>
        <pre>{album && JSON.stringify(album, null, "  ")}</pre>
      </div>
    </div>
  )
}

Basic.args = {
  id: "48D1hRORqJq52qsnUYZX56",
}
