import { createContext, FC, useState } from "react";

export const CountryContext = createContext<any>('');

export const CountryContextProvider: FC = (props) => {
    const [country, setCountry] = useState('')
    return (
        <CountryContext.Provider
          value={{
            country,
            setCountry
          }}
        >
          {props.children}
        </CountryContext.Provider>
      );

}