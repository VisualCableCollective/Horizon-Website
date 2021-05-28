import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

export default function NavbarItem({ icon, title, href, active = false }) {
  const [isActive, setIsActive] = useState(active);

  return (
    <Link href={href} passHref>
      <ItemWrapper>
        {icon}
        {title && <ItemTitle>{title}</ItemTitle>}
      </ItemWrapper>
    </Link>
  );
}

const ItemWrapper = styled.a`
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease-in-out;
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