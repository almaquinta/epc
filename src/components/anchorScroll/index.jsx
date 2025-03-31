import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaAngleUp } from "react-icons/fa";
const AnchorScroll = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.verde};

  padding: 1rem;
  .icon__anchor {
    color: ${({ theme }) => theme.colors.blanco};
    font-size: ${({ theme }) => theme.fontsize.large};
  }
  &.anchor {
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }
  &.active {
    visibility: visible;
    opacity: 1;
  }
`;
const Anchor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", (e) => {
        let Scrolly = window.scrollY;
        // console.log(Scrolly);
        let anchor = document.querySelector(".anchor");
        Scrolly > 400
          ? anchor.classList.add("active")
          : anchor.classList.remove("active");
        // console.log(Scrolly);
      });
    }
  });
  return (
    <AnchorScroll to="#" className="anchor">
      <FaAngleUp className="icon__anchor"></FaAngleUp>
    </AnchorScroll>
  );
};

export default Anchor;
