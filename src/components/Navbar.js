import React, { useEffect, useRef, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import M from "materialize-css";
//hook dari react router dom buat ngeakses url
import { useLocation } from "react-router-dom";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState("menu");

  const { navigate } = useContext(GlobalContext);

  // ref untuk mengambil target elemen sidenav
  const sidenavRef = useRef(null);

  //bikin objek dari hooknya
  const location = useLocation();

  useEffect(() => {
    M.Sidenav.init(sidenavRef.current);

    setMenuStatus("menu");
    //pathname buat ngambil urlnya
    if (location.pathname.startsWith("/team")) {
      //kode ngubah logo navbar
      setMenuStatus("arrow_back");
    }
  }, [location.pathname]);

  const handleBack = () => {
    if (location.pathname.startsWith("/team")) {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="nav-extended green">
        <div className="nav-wrapper container">
          <a
            href="/"
            className={
              menuStatus === "menu" ? "brand-logo" : "brand-logo--detail-page"
            }
          >
            Skor Bola
          </a>
          <a
            onClick={handleBack}
            href="."
            data-target="mobile-demo"
            className={menuStatus === "menu" ? "sidenav-trigger" : ""}
          >
            <i className="material-icons">{menuStatus}</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#!">About</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul ref={sidenavRef} className="sidenav" id="mobile-demo">
        <li>
          <a href="#!">About</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
