import { useQuery } from "../useQuery"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { paths } from "../../schema"

export const usePlay = (token: string | undefined, device_id?: string) => {
  type Params = OpArgType<paths["/me/player/play?device_id={device_id}"]["put"]>

  const [params, setParams] = useState<Params>({
    device_id: device_id,
  })
  if (params?.device_id !== device_id) {
    setParams((params) => ({ ...params, device_id }))
  }

  useQuery("/me/player/play?device_id={device_id}", "put", token, params)
  return setParams
}
