import React from "react";
import { ReactComponent as LogoHeader } from "../../assets/svg/logo-header.svg";

export const Header = ({ action, setText }) => {
  const resetPage = () => {
    action({ name: "", page: 1 });
    setText("");
  };

  return (
    <header className="header">
      <LogoHeader onClick={resetPage} />
    </header>
  );
};
