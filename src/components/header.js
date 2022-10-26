import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../Store'

const Header = () => {


  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {electronics,jewellery,mensclothes,womensclothes} = state;
 

  return (
    <div className="h-container">
      <div className="h-row">
        <div className="h-col">
          <div className="h-logo">
            <Link to="/" className="logo">
              SRI SHOP
            </Link>
          </div>
          <div className="h-menu">
            <ul className="menu-item">
              <li>
                <Link to="/" className="menu-link">
                  Home
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="h-col">
          <div className="h-anotherMenu">
            <ul className="menu-anotherItem">
            <li>
                <Link to="/electronics" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faBagShopping} />
                    {electronics.electronicsItems.length? (
                      <span className="menu-badge">{electronics.electronicsItems.length}</span>
                    ) : (
                      <span className="menu-badge">0</span>
                    )}
                  </div>
                  <span>Electronics</span>
                </Link>
              </li>
            
              <li>
                <Link to="/jewellery" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faBagShopping} />
                    {jewellery.jewelleryItems.length ? (
                      <span className="menu-badge">{jewellery.jewelleryItems.length}</span>
                    ) : (
                      <span className="menu-badge">0</span>
                    )}
                  </div>
                  <span>Jewellery</span>
                </Link>
              </li>
              <li>
                <Link to="/mensclothes" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faBagShopping} />
                    {mensclothes.mensclothesItems.length ? (
                      <span className="menu-badge">{mensclothes.mensclothesItems.length}</span>
                    ) : (
                      <span className="menu-badge">0</span>
                    )}
                  </div>
                  <span>Men's</span>
                </Link>
              </li>
              <li>
                <Link to="/womensclothes" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faBagShopping} />
                    {womensclothes.womensclothesItems.length ? (
                      <span className="menu-badge">{womensclothes.womensclothesItems.length}</span>
                    ) : (
                      <span className="menu-badge">0</span>
                    )}
                  </div>
                  <span>Women's</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
