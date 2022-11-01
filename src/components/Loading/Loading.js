import React from "react";
import ReactLoading from "react-loading";
import "./Loading.Module.css";
const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <ReactLoading
          type={"bubbles"}
          color={"green"}
          height={300}
          width={200}
        />
      </div>
    </>
  );
};

export default Loading;
