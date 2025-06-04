// Re-export everything from separate files to maintain the same API
export { UserContext } from './UserContext.context'
export type { User, UserContextType } from './UserContext.context'
export { useUser } from './UserContext.hook'
export {
  UserProvider as default,
  UserProvider,
  type UserProviderProps,
} from './UserContext.provider'
