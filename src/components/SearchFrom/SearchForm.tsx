import React, {ChangeEvent} from "react";

import {useSearchFormContext} from "../../utilities";

import "./styles.css";

export const SearchForm: React.FC = () => {

  const {value, setValue} = useSearchFormContext()

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }

  return (
    <div className="searchForm">
      <form>
        <input type="search" value={value} onChange={onChangeInputHandler}/>
      </form>
    </div>
  );
}
