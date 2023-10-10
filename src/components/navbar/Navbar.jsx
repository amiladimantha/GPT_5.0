import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/gpt.png";
import "./navbar.css";
import { SignIn, SignUp } from "..";

const Menu = () => (
  
  <>
    <p>
      <a className="nav_links" href="#home">
        Home
      </a>
    </p>
    <p>
      <a className="nav_links" href="#wgpt3">
        What is GPT5?
      </a>
    </p>
    <p>
      <a className="nav_links" href="#features">
        Case Studies
      </a>
    </p>
    <p>
      <a className="nav_links" href="#possibility">
        Open AI
      </a>
    </p>
    <p>
      <a className="nav_links" href="#blog">
        Library
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [SignInModalVisible,setSignInModalVisibile ] = useState(false);
  const [SignUpModalVisible,setSignUpModalVisibile ] = useState(false);

  const toggleSignUp = () =>{
    setSignUpModalVisibile(!SignUpModalVisible);
  }

  const toggleSignIn = () =>{
    setSignInModalVisibile(!SignInModalVisible);
  }

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="open-ai-logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={toggleSignIn}>Sign in</p>
        <button type="button" onClick={toggleSignUp}>Sign up</button>
      </div>
      {SignInModalVisible && (
        <SignIn visible={SignInModalVisible} onCancel={toggleSignIn} />
      )}
      {SignUpModalVisible && (
        <SignUp visible={SignUpModalVisible} onCancel={toggleSignUp} />
      )}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
