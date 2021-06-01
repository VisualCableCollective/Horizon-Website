import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

import Config from "../../Config";

// Components
import NavbarItem from "./navbaritem";

// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function AccountItems({ isUserAuthenticated }) {
  return (
    <AccountItemsWrapper>
      {isUserAuthenticated ? <UserItems /> : <GuestItems />}
    </AccountItemsWrapper>
  );
}

function GuestItems() {
  return (
    <NavbarItem
      title={"Sign In"}
      icon={<AccountCircleIcon style={{ height: "1em" }} />}
      href={
        Config.getAPIServerURL() +
        encodeURI("/auth/vcc/redirect?method=web-app")
      }
    />
  );
}

function UserItems() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ItemWrapper
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon style={{ height: "1em" }} />
        <ItemTitle>My Account</ItemTitle>
      </ItemWrapper>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const AccountItemsWrapper = styled.div`
  display: flex !important;
  align-items: center;
`;

const ItemWrapper = styled.a`
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const ItemTitle = styled.h1`
  padding-left: 10px;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
`;
