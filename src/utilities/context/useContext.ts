import {useContext, useMemo} from "react";
import {SearchFormContext} from "./SearchFormProvider.tsx";

export const useSearchFormContext = () => {
  const {value, setValue} = useContext(SearchFormContext)
  return useMemo(() => ({value, setValue}), [setValue, value])
}
