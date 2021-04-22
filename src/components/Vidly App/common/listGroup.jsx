import React from "react";
import { Link } from "react-router-dom";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <ul className="list-group">
      
      {items.map((item) => (
        <Link key={item.name}
        to={"/" + item[valueProperty] + "?"}           
        >
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}             
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        </Link>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
