import {useContext, useMemo} from "react";
import {SearchFormContext, UsersContext} from "./ContextProvider.tsx";

export const useUsersContext = () => {
  const {users, error, isLoading} = useContext(UsersContext)
  return useMemo(() => ({users, error, isLoading}), [error, isLoading, users])
}

export const useSearchFormContext = () => {
  const {value, setValue} = useContext(SearchFormContext)
  return useMemo(() => ({value, setValue}), [setValue, value])
}
