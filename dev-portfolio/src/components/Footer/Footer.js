import React from "react";
import SocialDetails from "../Header/SocialDetails";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nadvolod@gmail.com">
            click to email me
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovation</Slogan>
        </CompanyContainer>
        <SocialDetails></SocialDetails>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
