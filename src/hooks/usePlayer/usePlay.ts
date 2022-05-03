import { useQuery } from "../useQuery"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { paths } from "../../schema"

export const usePlay = (token: string | undefined, deviceId?: string) => {
  type UsePlayParams = OpArgType<
    paths["/me/player/play?device_id={device_id}"]["put"]
  >

  const [params, setParams] = useState<UsePlayParams>({
    device_id: deviceId,
  })
  if (params?.device_id !== deviceId) {
    setParams((params) => ({ ...params, device_id: deviceId }))
  }

  useQuery("/me/player/play?device_id={device_id}", "put", token, params)
  return setParams
}
