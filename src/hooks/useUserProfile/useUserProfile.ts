import { useQuery } from "../useQuery"
import { useState } from "react"
import { UserProfile, Id, Token } from "../../types"

export const useUserProfile = (token: Token | undefined, userId?: Id) => {
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>(
    undefined
  )
  const path = userId ? "/users/{user_id}" : "/me"
  const params: {} | { user_id: string } = userId ? { user_id: userId } : {}
  useQuery(path, "get", token, params, setUserProfile)
  return userProfile
}
