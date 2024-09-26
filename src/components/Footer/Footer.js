import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;
    margin-top: 40px; /* Increased space for better visibility */

    a {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container" />
      <span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Made with love ❤️ by Anish Das ©
      </span>
    </FooterSection>
  );
}

export default Footer;
