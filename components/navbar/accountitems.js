import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from "react";

import Config from "../../Config";

// Components
import NavbarItem from "./navbaritem";

// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function AccountItems({ isUserAuthenticated }) {
  return (
    <AccountItemsWrapper>
      {isUserAuthenticated ? <UserItems/> : <GuestItems />}
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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
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
