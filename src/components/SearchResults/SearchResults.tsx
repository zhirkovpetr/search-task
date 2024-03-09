import React from "react";

import {Loader} from "../Loader/Loader.tsx";
import {UserCard} from "../UserCard/UserCard";
import {useUsersContext} from "../../utilities";

import "./styles.css";

export const SearchResults: React.FC = () => {
  const {users, error, isLoading} = useUsersContext()

  if (isLoading) return <Loader/>
  if (error) return <span className="usersError">{error}</span>
  if (!users.length) return <span className="usersError">Пользатель не найден!</span>

  return (
    <div className="usersList">
      {users.map((user) => (
        <UserCard key={user.id} {...user}  />
      ))}
    </div>
  );
}
