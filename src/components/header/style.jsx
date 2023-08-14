import styled from "styled-components"
export const Header = styled.header`
  background: linear-gradient(
    90deg,
    rgba(2, 6, 44, 1) 0%,
    rgba(9, 9, 121, 1) 82%,
    rgba(6, 18, 128, 1) 100%
  );
  padding: auto;
  height: 10vh;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
  .LinkLogo {
    background-color: ${({ theme }) => theme.colors.blanco};
    padding: 0 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .inside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .navbar {
    flex-direction: row;
    position: static;
    @media (max-width: 1000px) {
      width: 200px;
    }
  }
  .navbar li {
    padding-left: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    :hover .submenu {
      transition: 0.3s;
      visibility: visible;
      opacity: 1;
    }
  }
  .icondownNav {
    margin-left: 0.5rem;
    vertical-align: text-top;
  }
  .submenu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    background-color: ${({ theme }) => theme.colors.azulClaro};
    margin: 0;
    li {
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.azulClaro};
      text-align: center;
      a {
        margin: 0;
        width: 100%;
        word-break: normal;
      }
      :hover {
        background-color: ${({ theme }) => theme.colors.blanco};
        a {
          color: ${({ theme }) => theme.colors.azulClaro};
        }
      }
    }
  }
  img {
    height: 5vh;
    width: auto;
  }
  li {
    list-style: none;
    display: flex;

    &:last-child a {
      margin-right: 0;
    }

    a {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.colors.blanco};
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
    }
  }
  @media (max-width: 1000px) {
    .inside .navbar {
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 10vh;
      transition: transform 0.3s ease-in-out;
      /* transform: translateX(100%); */
      justify-content: space-between;
      height: 90vh;
      background: ${({theme})=>(theme.colors.azulClaro)};
    }
    .navbar li {
      padding-left: 0;
      &:nth-child(3) {
        flex-direction: column;
        justify-content: center;
      }
      &::after {
        content: none;
      }
      .submenu {
        display: none;
      }
    }
  }
`
export const Navbar = styled.nav`
  @media (max-width: 1000px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    padding: 1rem;
  }
`
