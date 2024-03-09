import React from "react";

import {SearchForm} from "./components/SearchFrom/SearchForm";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {SearchFormProvider} from "./utilities";

/*import "./styles.css";*/

export const App: React.FC = () => {
  return (
    <SearchFormProvider>
      <SearchForm/>
      <SearchResults/>
    </SearchFormProvider>
  );
}
