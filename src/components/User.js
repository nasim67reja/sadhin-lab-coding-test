import React from "react";
import { GrFormView } from "react-icons/gr";

const User = ({ data }) => {
  return (
    <li className="grid-row">
      <div className="flex-1">{data.first_name}</div>
      <div className="flex-1">{data.last_name}</div>
      <div className="flex-1">{data.user_type}</div>
      <div className="flex-1">{data.division}</div>
      <div className="flex-1">{data.district}</div>
      <div className="flex-1 center  cursor-pointer">
        <GrFormView size={20} />
      </div>
    </li>
  );
};

export default User;
