import styled from "styled-components";

import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";

export const Container = styled.div`
  background: ${props => props.theme.colors.black600};
  color: white;
  padding: 4rem 2.5rem 2rem 2.5rem;
  position: relative;

  .accent {
    height: 0.25rem;
    width: 6.25rem;
    background-color: ${props => props.theme.colors.primary};
    position: absolute;
    top: 0;
    left: 2.5rem;
  }

  .footer-top,
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-top {
    margin-bottom: 0.5rem;
  }

  .footer-bottom {
    &__tablet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #878787;
      p {
        font-weight: bold;
      }
      .socials {
        margin-top: 0;
      }
    }
  }

  .about {
    width: 50%;
    max-width: 540px;
    color: #878787;
    &__main {
      margin-bottom: 3.5rem;
    }
    &__copyright {
      font-weight: bold;
    }
  }

  @media (max-width: 965px) {
    .footer-top {
      flex-direction: column;
      align-items: flex-start;
      &__logo {
        margin-bottom: 1rem;
      }
    }
    .about {
      width: auto;
      max-width: 670px;
    }
  }

  @media (max-width: 500px) {
    padding-left: 2rem;
    padding-right: 2rem;
    .accent {
      left: 50%;
      transform: translateX(-50%);
    }
    .footer-top {
      align-items: center;
      margin-top: -1rem;
      margin-bottom: 0;
    }
    .about__main {
      text-align: center;
      margin-bottom: 2rem;
    }
    .footer-bottom__tablet {
      flex-direction: column;
      text-align: center;
      .socials {
        margin-top: 2rem;
      }
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1rem;

  > * {
    height: 1.5rem;
    width: 1.5rem;
    &:hover {
      cursor: pointer;
      filter: brightness(0) saturate(100%) invert(74%) sepia(17%)
        saturate(3346%) hue-rotate(322deg) brightness(86%) contrast(95%);
    }
  }
  .icon-fb {
    background: url(${fbIcon});
  }
  .icon-twitter {
    background: url(${twitterIcon});
    height: 1.25rem;
    margin: 0 1.25rem;
  }
  .icon-instagram {
    background: url(${instagramIcon});
  }
`;
