import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from 'react'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import {AuthModel, UserModel} from './_models'
import * as authHelper from './AuthHelpers'
import {getUserByToken} from './_requests'
import { io, Socket  } from "socket.io-client"

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: UserModel | undefined
  setCurrentUser: (user: UserModel | undefined) => void
  logout: () => void
  socketInstance: Socket | undefined
  setSocketInstance: (instance: Socket | undefined) => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
  socketInstance: undefined,
  setSocketInstance: () => {}
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC = ({children}) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
  const [socketInstance, setSocketInstance] = useState<Socket | undefined>()
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)

      const socketUrl = process.env.REACT_APP_SOCKET_URL;

      const socketIns = io(socketUrl ? socketUrl : '');
      setSocketInstance(socketIns);
      socketIns.on("connect", () => {
        socketIns.emit("dash_login", {uid: auth.id }, (res: string) => {
          console.log(res);
        });
      });

    } else {
      authHelper.removeAuth()
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
    setSocketInstance(undefined)
  }

  return (
    <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout, socketInstance, setSocketInstance}}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC = ({children}) => {
  const {auth, logout, setCurrentUser} = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    const requestUser = async (accessToken: string, refreshToken: string) => {
      try {
        if (!didRequest.current) {
          const {data} = await getUserByToken(accessToken, refreshToken)
          if (data) {
            setCurrentUser(data)
          }
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          logout()
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (auth && auth.accessToken) {
      requestUser(auth.accessToken, auth.refreshToken)
    } else {
      logout()
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export {AuthProvider, AuthInit, useAuth}
