import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Ids, Albums, Token } from "../../types"
import { commaSeparated } from "../../util"

export type UseAlbumsParams = Omit<OpArgType<paths["/albums"]["get"]>, "ids">

export const useAlbums = (
  token: Token | undefined,
  ids: Ids,
  params?: UseAlbumsParams
) => {
  const [albums, setAlbums] = useState<Albums | undefined>(undefined)
  useQuery(
    "/albums",
    "get",
    token,
    { ids: commaSeparated(ids), ...params },
    setAlbums,
    ({ albums }) => albums || []
  )

  return albums
}
