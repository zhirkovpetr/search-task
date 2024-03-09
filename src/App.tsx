import React from "react";

import {SearchForm} from "./components/SearchFrom/SearchForm";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {ContextProvider} from "./utilities";

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <SearchForm/>
      <SearchResults/>
    </ContextProvider>
  );
}
