import { components } from "./schema"

export type Token = string
export type Id = string
export type Ids = Id[]

export type Album = components["schemas"]["AlbumObject"]
export type Albums = Album[]
export type Artist = components["schemas"]["ArtistObject"]
export type Artists = Artist[]
export type CurrentlyPlayingObject =
  components["schemas"]["CurrentlyPlayingObject"]
export type Device = components["schemas"]["DeviceObject"]
export type Devices = Device[]
export type Genre = string
export type Genres = Genre[]
export type Image = components["schemas"]["ImageObject"]
export type Images = Image[]
export type Market = string
export type Markets = Market[]
export type PlaybackState =
  components["schemas"]["CurrentlyPlayingContextObject"]
export type Playlist = components["schemas"]["PlaylistObject"]
export type Playlists = Playlist[]
export type PlayListItem =
  | components["schemas"]["TrackObject"]
  | components["schemas"]["EpisodeObject"]
export type PlaylistItems = PlayListItem[]
export type PlaylistTrackObject = components["schemas"]["PlaylistTrackObject"]
export type PlaylistTrack = components["schemas"]["PlaylistTrackObject"]
export type SearchResults = {
  tracks?: components["schemas"]["SimplifiedTracksPagingObject"]
  artists?: components["schemas"]["SimplifiedArtistsPagingObject"]
  albums?: components["schemas"]["AlbumsPagingObject"]
  playlists?: components["schemas"]["PlaylistsPagingObject"]
  shows?: components["schemas"]["ShowsPagingObject"]
  episodes?: components["schemas"]["EpisodesPagingObject"]
}
export type SearchType =
  | "album"
  | "artist"
  | "playlist"
  | "track"
  | "show"
  | "episode"
export type SearchTypes = SearchType[]
export type SimpleAlbum = components["schemas"]["SimplifiedAlbumObject"]
export type SimpleAlbums = SimpleAlbum[]
export type SimpleTrack = components["schemas"]["SimplifiedTrackObject"]
export type SimpleTracks = SimpleTrack[]
export type TimeRange = "long_term" | "medium_term" | "short_term"
export type Track = components["schemas"]["TrackObject"]
export type Tracks = Track[]
export type PublicUserProfile = components["schemas"]["PublicUserObject"]
export type PrivateUserProfile = components["schemas"]["PrivateUserObject"]
export type UserProfile = PublicUserProfile | PrivateUserProfile
