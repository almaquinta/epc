import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
    html{
      scroll-behavior: smooth;
      overflow-x:hidden;
      word-break: break-word;
    /* -webkit-tap-highlight-color: transparent; */
    }
    *{
        font-family:'Segoe UI';
        box-sizing:border-box;
    }
    body{
      background-color:#E6E6E6;
    }
    
    label,
    input,
    textarea,
    select {
      display: block;
      margin-bottom: 0.5rem;
      width:100%;
    }
    input,select{
        padding:.5rem 0;
    }
    label{
        font-weight:bold;
    }
    input,
    textarea,
    select {
      /* border: 1px solid ${({ theme }) => theme.colors.azul}; */
      border-radius: 1.5rem;
      padding: .5rem 1rem;
    }
    .container {
        max-width:1440px;
        margin:0 auto;
        padding:0 5vw;
    }
    .container.wrapper{
      padding-top:3rem;
      padding-bottom:3rem;
    }
    .page{
        margin-top:10vh;
    }
    .card{
      padding-top:2rem ;
      padding-bottom:2rem ;
    }
    .button{
        padding:.5rem 2rem;
        color:  ${({ theme }) => theme.colors.blanco};
        border:none;
        :hover{
          transition:.3s;
        }
        &.verde{
          background-color: ${({ theme }) => theme.colors.verde};
          border:2px solid ${({ theme }) => theme.colors.verde};
          :hover{
            color:  ${({ theme }) => theme.colors.verde};
          background-color: ${({ theme }) => theme.colors.blanco};

          }
        }
        &.azulOscuro{
          background-color: ${({ theme }) => theme.colors.azulOscuro};
          border:2px solid ${({ theme }) => theme.colors.azulOscuro};
          :hover{
          background-color: ${({ theme }) => theme.colors.blanco};
            color:  ${({ theme }) => theme.colors.azulOscuro};

          }
        }
        :focus{
          /* outline: -webkit-focus-ring-color auto 1px;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto; */ 
    outline-width: 0;
        }
    }
    a{
      text-decoration:none;
    }
    ul{
      padding:0;
    }
  
@media (max-width: 500px){
  .buttons{
  
  }
  .container.wrapper{
    padding-top:1rem;
    padding-bottom:1rem;
    
  }
}
`
export const Theme = {
  colors: {
    azulOscuro: "#02062C",
    azulClaro: "#00235A",
    negro: "black",
    verde: "#00CF75",
    blanco: "white",
    naranja: "#EB6025",
  },
  fontsize: {
    xssmall: ".8rem",
    normal: "1rem",
    small: "1.2rem",
    medium: "clamp(1rem,2.5vw,1.5rem)",
    large: "clamp(1.5rem,3vw,2rem)",
    extralarge: "clamp(2.5rem,4vw,3.5rem)",
    xlextralarge: "clamp(3rem,5vw,4.5rem)",
  },
  size: {
    heightMax: "90vh",
  },
  mediaquery: {
    tablet: "1000px",
    mobile: "800px",
    xsmovil: "640px",
  },
}
