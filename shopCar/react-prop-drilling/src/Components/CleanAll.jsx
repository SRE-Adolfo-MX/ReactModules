//import styles from "./PrimaryButton.module.scss";
import React from "react";

const CleanAll = ({ link, text }) => {
  return (
      <a href={link} className={`btn btn-primary `}>
        {text}
      </a>
  );
};

export default CleanAll;