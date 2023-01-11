import React, { createContext, useState, useContext } from "react";

import { AppState as AS, DEF_APP_STATE } from '../models/stateApp';
import axios, { AxiosError } from "axios";


export interface AppContext {
  AppCustomState: AS;
  HandleChangeAppState: (f: string) => void
}


const AppStateContext = createContext<AppContext>({ AppCustomState:DEF_APP_STATE, HandleChangeAppState(f) { } });


export const useAppCustomState = () => { return useContext(AppStateContext) };


type Props = {
  children: JSX.Element
}

export const AppStateContextProvider = ({ children }: Props) => {

  const [AppCustomState, setAppCustomState] = useState<AS>(DEF_APP_STATE)
  const HandleChangeAppState = (event: string): void => {
    setAppCustomState(DEF_APP_STATE);
  };


  async function fetchWallet() {
    try {
      setAppCustomState(DEF_APP_STATE)
      const response = await axios.get<AS>('https://ipinfo.io/ip')
      setAppCustomState(response.data)
    } catch (e) {
      const error = e as AxiosError
      setAppCustomState(DEF_APP_STATE)
    }
  }

  // React.useEffect(() => {
    // fetchWallet()
  // }, [])

  return (
    <AppStateContext.Provider value={{  AppCustomState, HandleChangeAppState }} >
      {children}
    </AppStateContext.Provider>
  )
}