import { useEffect, useState } from "react"
import { getControls } from "./controls"

export const usePlayer = (token: string, name: string) => {
  const [player, setPlayer] = useState<Spotify.Player | undefined>(undefined)
  const [paused, setPaused] = useState(false)
  const [active, setActive] = useState(false)
  const [track, setTrack] = useState<Spotify.Track | undefined>(undefined)
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://sdk.scdn.co/spotify-player.js"
    script.async = true
    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const thePlayer = new Spotify.Player({
        name: name,
        getOAuthToken: (cb: any) => {
          cb(token)
        },
        volume: 0.5,
      })
      thePlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id)
        setDeviceId(device_id)
      })
      thePlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device has gone offline", device_id)
        setDeviceId(undefined)
      })
      thePlayer.addListener("player_state_changed", (state) => {
        if (state) {
          setPaused(state.paused)
          setTrack(state.track_window.current_track)
          thePlayer.getCurrentState().then((state) => setActive(Boolean(state)))
        }
      })
      thePlayer.connect()
      if (player) {
        player.disconnect()
      }
      setPlayer(thePlayer)
    }
  }, [name, token])
  return {
    player,
    deviceId,
    paused,
    active,
    track,
    controls: getControls(token, deviceId),
  }
}
