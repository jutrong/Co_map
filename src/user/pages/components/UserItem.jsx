import React from "react";
import Avartar from "../../../shared/components/UIElement/Avatar";
import "./UserItem.scss";
import { Link } from "react-router-dom";
import Card from "../../../shared/components/UIElement/Card";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item_content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item_image">
            <Avartar image={props.image} alt={props.name} />
          </div>
          <div className="user-item_info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
