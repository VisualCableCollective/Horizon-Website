import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

// Icons
import CloseIcon from "@material-ui/icons/Close";

export default function SidebarItem({ icon, title, href, active = false }) {
  const [isActive, setIsActive] = useState(active);

  return (
    <Link href={href} passHref>
      <ItemWrapper>
        {icon}
        <ItemTitle>{title}</ItemTitle>
      </ItemWrapper>
    </Link>
  );
}

const ItemWrapper = styled.a`
  height: 40px;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const ItemTitle = styled.h1`
  padding-left: 24px;
  font-size: 1.2rem;
  font-weight: 500;
`;
