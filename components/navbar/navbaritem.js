import styled, {css} from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItem({ icon, title, href, active = false }) {
  const [isActive, setIsActive] = useState(active);
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <ItemWrapper>
        {icon}
        {title && (
          <ItemTitle active={router.asPath === href ? true : false}>
            {title}
          </ItemTitle>
        )}
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
  ${(props) =>
    props.active &&
    css`
      color: rgba(255, 255, 255, 1);
    `};
`;

const ItemTitle = styled.h1`
  padding-left: 10px;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
`;
