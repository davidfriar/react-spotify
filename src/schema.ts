/**
 * Patches for the generated file
 * (paths with 'put' and 'post' methods which need query params in the path)
 */

declare module "./schema-orig" {
  interface paths {
    "/me/player/play?device_id={device_id}": {
      /** Start a new context or resume current playback on the user's active device. */
      put: operations["start-a-users-playback"]
    }
    "/me/player?device_ids={device_ids}": {
      /** Transfer playback to a new device and determine if it should start playing. */
      put: operations["transfer-a-users-playback"]
    }
    "/me/player/pause?device_id={device_id}": {
      /** Pause playback on the user's account. */
      put: operations["pause-a-users-playback"]
    }
    "/me/player/next?device_id={device_id}": {
      /** Skips to next track in the user’s queue. */
      post: operations["skip-users-playback-to-next-track"]
    }
    "/me/player/previous?device_id={device_id}": {
      /** Skips to previous track in the user’s queue. */
      post: operations["skip-users-playback-to-previous-track"]
    }
    "/me/player/seek?device_id={device_id}&position_ms={position_ms}": {
      /** Seeks to the given position in the user’s currently playing track. */
      put: operations["seek-to-position-in-currently-playing-track"]
    }
    "/me/player/seek?&position_ms={position_ms}": {
      /** Seeks to the given position in the user’s currently playing track. */
      put: operations["seek-to-position-in-currently-playing-track"]
    }
    "/me/player/repeat?device_id={device_id}&state={state}": {
      /**
       * Set the repeat mode for the user's playback. Options are repeat-track,
       * repeat-context, and off.
       */
      put: operations["set-repeat-mode-on-users-playback"]
    }
    "/me/player/repeat?state={state}": {
      /**
       * Set the repeat mode for the user's playback. Options are repeat-track,
       * repeat-context, and off.
       */
      put: operations["set-repeat-mode-on-users-playback"]
    }
    "/me/player/volume?device_id={device_id}&volume_percent={volume_percent}": {
      /** Set the volume for the user’s current playback device. */
      put: operations["set-volume-for-users-playback"]
    }
    "/me/player/volume?volume_percent={volume_percent}": {
      /** Set the volume for the user’s current playback device. */
      put: operations["set-volume-for-users-playback"]
    }
    "/me/player/shuffle?device_id={device_id}&state={state}": {
      /** Toggle shuffle on or off for user’s playback. */
      put: operations["toggle-shuffle-for-users-playback"]
    }
    "/me/player/shuffle?state={state}": {
      /** Toggle shuffle on or off for user’s playback. */
      put: operations["toggle-shuffle-for-users-playback"]
    }
    "/me/player/queue?device_id={device_id}&uri={uri}": {
      /** Add an item to the end of the user's current playback queue. */
      post: operations["add-to-queue"]
    }
    "/me/player/queue?uri={uri}": {
      /** Add an item to the end of the user's current playback queue. */
      post: operations["add-to-queue"]
    }
  }
}

export * from "./schema-orig"
