import React, {createContext, useMemo, useState} from "react";

import {useDebounce, useFetch} from "../hooks";
import {IUser, IUsers} from "../types";

interface IUsersContext {
  users: IUser[];
  error: string;
  isLoading: boolean;
}

interface ISearchFormContext {
  value: string;
  setValue: (value: string) => void;
}

export const SearchFormContext = createContext<ISearchFormContext>({
  value: '', setValue: () => {
  }
});

export const UsersContext = createContext<IUsersContext>({users: [], isLoading: true, error: ''});

const API_URL = "https://dummyjson.com/users";
export const ContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {

  const [value, setValue] = useState('');

  const debouncedSearchTerm = useDebounce({value, delay: 500});

  const {data, error, isLoading} = useFetch<IUsers>(`${API_URL}/search?q=${debouncedSearchTerm}`)

  const searchFormValue = useMemo(() => {
    return {
      value, setValue
    }
  }, [value])

  const usersValue = useMemo(() => {
    const users = data?.users || []
    return {
      users, error, isLoading
    }
  }, [data, error, isLoading])

  return (
    <UsersContext.Provider value={usersValue}>
      <SearchFormContext.Provider value={searchFormValue}>
        {children}
      </SearchFormContext.Provider>
    </UsersContext.Provider>
  )
}
