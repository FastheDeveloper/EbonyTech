import { createContext } from "react"
import { AuthStore } from "./AuthStore"

const authStore = new AuthStore()

export const StoreContext = createContext({
  authStore,
})
