import React from "react";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";

const User = ({ data }) => {
  return (
    <li className="grid-row">
      <div className="flex-1">{data.first_name}</div>
      <div className="flex-1 last-name">{data.last_name}</div>
      <div className="flex-1">{data.user_type}</div>
      <div className="flex-1">{data.division}</div>
      <div className="flex-1 district">{data.district}</div>
      <div className="flex-1 center  cursor-pointer">
        <Link to={`/${data.id}`}>
          <GrFormView size={20} />
        </Link>
      </div>
    </li>
  );
};

export default User;
