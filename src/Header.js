import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from  "@material-ui/core/IconButton";
import  './Header.css'


export const Header = () => {
  return (
    <div className="header">
      <IconButton>
      <PersonIcon className="header__icon" fontSize=" large" />
      </IconButton>
      <link to="">
      <img  
      src="https://previews.123rf.com/images/qoolio/qoolio1602/qoolio160200067/52883842-animaux-talk-pet-logo-concept-minimal-icon-paw-.jpg"
      className="header__logo"
      alt="logo"
      />
      </link>
      
      <link to="/chats">
      <IconButton>
      <ForumIcon fontSize=" large" className="header__icon"  />
      </IconButton>
      </link>
    </div>
  );
};
