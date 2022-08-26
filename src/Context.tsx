import { createContext, FC, useState } from "react";

export const CountryContext = createContext<any>('');

export const CountryContextProvider: FC = (props) => {
    const [country, setCountry] = useState('')
    const [usersByCountry, setUsersByCountry] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0)
    return (
        <CountryContext.Provider
          value={{
            country,
            setCountry,
            usersByCountry,
            setUsersByCountry,
            totalUsers,
            setTotalUsers,
          }}
        >
          {props.children}
        </CountryContext.Provider>
      );

}