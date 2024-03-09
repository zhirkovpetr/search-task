import React from "react";

import {IUser} from "../../utilities";

import "./styles.css";

interface IUserCardProps extends IUser {
}

export const UserCard: React.FC<IUserCardProps> = React.memo(({image, firstName, lastName, address}) => {
  return (
    <div className="userCard">
      <img className="userPic" src={image} alt={'user Picture'}/>
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
})
