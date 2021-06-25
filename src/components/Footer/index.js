import { FooterContainer, IconContainer, Icon, Copy } from './style'
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { BiCopyright } from 'react-icons/bi';

export function Footer() {
    return (
        <FooterContainer>
            <IconContainer>
                <Icon><TiSocialFacebookCircular /></Icon>
                <Icon><IoLogoInstagram /></Icon>
                <Icon><IoLogoTwitter /></Icon>
            </IconContainer>
            <Copy><BiCopyright />CafeComByte</Copy>
        </FooterContainer>
    )
}