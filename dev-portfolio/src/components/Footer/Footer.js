import React from 'react'
import SocialDetails from '../Header/SocialDetails'

import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem
                        data-testid="mailto"
                        href="mailto:nikolay@ultimateqa.com"
                    >
                        click to work with me
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
    )
}

export default Footer
