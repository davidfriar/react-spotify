import { executeQuery } from "../useQuery"

type PlayParams = { uris?: string[]; context_uri?: string }
export const play = (token: string, params: PlayParams, deviceID?: string) => {
  if (deviceID) {
    executeQuery("/me/player/play?device_id={device_id}", "put", token, {
      ...params,
      device_id: deviceID,
    })
  } else {
    executeQuery("/me/player/play", "put", token, params)
  }
}

export const next = (token: string, deviceID?: string) => {
  if (deviceID) {
    executeQuery("/me/player/next?device_id={device_id}", "post", token, {
      device_id: deviceID,
    })
  } else {
    executeQuery("/me/player/next", "post", token, {})
  }
}

export const previous = (token: string, deviceID?: string) => {
  if (deviceID) {
    executeQuery("/me/player/previous?device_id={device_id}", "post", token, {
      device_id: deviceID,
    })
  } else {
    executeQuery("/me/player/previous", "post", token, {})
  }
}

export const transfer = (token: string, deviceID: string) => {
  executeQuery("/me/player?device_ids={device_ids}", "put", token, {
    device_ids: [deviceID],
  })
}

export const pause = (token: string, deviceID?: string) => {
  if (deviceID) {
    executeQuery("/me/player/pause?device_id={device_id}", "put", token, {
      device_id: deviceID,
    })
  } else {
    executeQuery("/me/player/pause", "put", token, {})
  }
}

export const seek = (token: string, positionMS: number, deviceID?: string) => {
  if (deviceID) {
    executeQuery(
      "/me/player/seek?device_id={device_id}&position_ms={position_ms}",
      "put",
      token,
      {
        position_ms: positionMS,
        device_id: deviceID,
      }
    )
  } else {
    executeQuery("/me/player/seek?&position_ms={position_ms}", "put", token, {
      position_ms: positionMS,
    })
  }
}

export const repeat = (
  token: string,
  state: "track" | "context" | "off",
  deviceID?: string
) => {
  if (deviceID) {
    executeQuery(
      "/me/player/repeat?device_id={device_id}&state={state}",
      "put",
      token,
      {
        state,
        device_id: deviceID,
      }
    )
  } else {
    executeQuery("/me/player/repeat?state={state}", "put", token, {
      state,
    })
  }
}

export const volume = (
  token: string,
  volumePercent: number,
  deviceID?: string
) => {
  if (deviceID) {
    executeQuery(
      "/me/player/volume?device_id={device_id}&volume_percent={volume_percent}",
      "put",
      token,
      {
        volume_percent: volumePercent,
        device_id: deviceID,
      }
    )
  } else {
    executeQuery(
      "/me/player/volume?volume_percent={volume_percent}",
      "put",
      token,
      {
        volume_percent: volumePercent,
      }
    )
  }
}

export const shuffle = (token: string, state: boolean, deviceID?: string) => {
  if (deviceID) {
    executeQuery(
      "/me/player/shuffle?device_id={device_id}&state={state}",
      "put",
      token,
      {
        state,
        device_id: deviceID,
      }
    )
  } else {
    executeQuery("/me/player/shuffle?state={state}", "put", token, {
      state,
    })
  }
}

export const queue = (token: string, uri: string, deviceID?: string) => {
  if (deviceID) {
    executeQuery(
      "/me/player/queue?device_id={device_id}&uri={uri}",
      "post",
      token,
      {
        uri,
        device_id: deviceID,
      }
    )
  } else {
    executeQuery("/me/player/queue?uri={uri}", "post", token, { uri })
  }
}

export const getControls = (token: string, deviceID?: string) => {
  return {
    play: (params: PlayParams) => play(token, params, deviceID),
    next: () => next(token, deviceID),
    previous: () => previous(token, deviceID),
    transfer: deviceID ? () => transfer(token, deviceID) : undefined,
    pause: () => pause(token, deviceID),
    seek: (positionMS: number) => seek(token, positionMS, deviceID),
    volume: (volumePercent: number) => volume(token, volumePercent, deviceID),
    repeat: (state: "track" | "context" | "off") =>
      repeat(token, state, deviceID),
    shuffle: (state: boolean) => shuffle(token, state, deviceID),
    queue: (uri: string) => queue(token, uri, deviceID),
  }
}
