import React from "react";

export const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ul className="list" key={item?.id}>
          <li>{item?.name}</li>
          <img src={item?.image} />
        </ul>
      ))}
    </>
  );
};
