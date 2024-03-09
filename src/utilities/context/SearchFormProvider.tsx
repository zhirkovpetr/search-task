import React, {createContext, useMemo, useState} from "react";

interface ISearchFormContext {
  value: string;
  setValue: (value: string) => void;
}

export const SearchFormContext = createContext<ISearchFormContext>({
  value: '', setValue: () => {
  }
});

export const SearchFormProvider: React.FC<React.PropsWithChildren> = ({children}) => {

  const [value, setValue] = useState('');

  const searchFormValue = useMemo(() => {
    return {
      value, setValue
    }
  }, [value])

  return (
    <SearchFormContext.Provider value={searchFormValue}>
      {children}
    </SearchFormContext.Provider>
  )
}
