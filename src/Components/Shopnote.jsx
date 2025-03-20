import React from "react";

const Shopnote = ({n1,n2,n3,n4,des}) => {
  return (
    <div className="container my-5">
      <h3 className="text-secondary">
        {n1} <span className="text-primary">{n2}</span> {n3}{" "}
        <span className="text-primary">{n4}</span>
      </h3>
      <p className="text-secondary">
      {des}
      </p>
    </div>
  );
};

export default Shopnote;
