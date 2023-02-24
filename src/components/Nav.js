import React from 'react';
import logo from "./../assets/images/logo.svg"
import FontSwitcher from "./../components/FontSwitcher";
import ThemeSwitcher from "./../components/ThemeSwitcher";

export default function Nav() {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <div className="settings">
          <FontSwitcher></FontSwitcher>
          <div className="settings__divider" />
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </nav>
  )
}
