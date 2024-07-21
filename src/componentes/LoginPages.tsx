import React from 'react'
import { useAuthStore } from '../store/auth.store'

export const LoginPages = () => {
const authStatue = useAuthStore(state => state.status)

  return (
    <div>LoginPages

        <h2>{authStatue}</h2>
    </div>
  )
}
