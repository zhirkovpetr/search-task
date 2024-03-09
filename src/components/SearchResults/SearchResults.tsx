import React from "react";

import {Loader} from "../Loader/Loader.tsx";
import {UserCard} from "../UserCard/UserCard";

import "./styles.css";
import {IUsers, useDebounce, useFetch, useSearchFormContext} from "../../utilities";

const API_URL = "https://dummyjson.com/users";

export const SearchResults: React.FC = () => {
  const {value} = useSearchFormContext()
  const debouncedSearchTerm = useDebounce({value, delay: 500});
  const {data, error, isLoading} = useFetch<IUsers>(`${API_URL}/search?q=${debouncedSearchTerm}`)

  if (isLoading) return <Loader/>
  if (error) return <span className="usersError">{error}</span>
  if (!data?.users.length) return <span className="usersError">Пользатель не найден!</span>

  return (
    <div className="usersList">
      {data?.users.map((user) => (
        <UserCard key={user.id} {...user}  />
      ))}
    </div>
  );
}
