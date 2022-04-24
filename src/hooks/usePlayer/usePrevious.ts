import { useQuery } from "../useQuery"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { paths } from "../../schema"

export const usePrevious = (token: string | undefined, device_id?: string) => {
  type Params = OpArgType<
    paths["/me/player/previous?device_id={device_id}"]["post"]
  >

  const [params, setParams] = useState<Params>({
    device_id: device_id,
  })
  if (params?.device_id !== device_id) {
    setParams((params) => ({ ...params, device_id }))
  }

  useQuery("/me/player/previous?device_id={device_id}", "post", token, params)
  return () => setParams((params) => ({ ...params, random: Math.random() }))
}
