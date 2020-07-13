import React from "react";
import { FaInfoCircle } from "react-icons/fa"
import "./Banner.scss";

export default function Banner(props) {
  return (
    <div className="Banner">
      <h6 className="Banner__text">
        <FaInfoCircle />
        {props.children}
      </h6>
    </div>
  )
}