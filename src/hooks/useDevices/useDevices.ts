import { useQuery } from "../useQuery"
import { paths } from "../../schema"
import { useState } from "react"
import { OpArgType } from "openapi-typescript-fetch"
import { Devices, Token } from "../../types"

export type UseDevicesParams = OpArgType<paths["/me/player/devices"]["get"]>

export const useDevices = (token: Token | undefined) => {
  const [devices, setDevices] = useState<Devices | undefined>(undefined)
  const params: UseDevicesParams = {}
  useQuery(
    "/me/player/devices",
    "get",
    token,
    params,
    setDevices,
    ({ devices }) => devices || []
  )
  return devices
}
