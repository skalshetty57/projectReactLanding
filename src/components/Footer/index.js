import React from "react"
import { animateScroll as scroll } from "react-scroll"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'


const Footer = () => {

	const toggleHome= ()=>{
        scroll.scrollToTop();
    }

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">Who we are</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms</FooterLink>
						</FooterLinkItems>
                        <FooterLinkItems>
							<FooterLinkTitle>Branches</FooterLinkTitle>
							<FooterLink to="/signin">East</FooterLink>
							<FooterLink to="/signin">West</FooterLink>
							<FooterLink to="/signin">North</FooterLink>
							<FooterLink to="/signin">South</FooterLink>
							<FooterLink to="/signin">Centeral</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
                    <FooterLinksWrapper>
						<FooterLinkItems>
						<FooterLinkTitle>Services</FooterLinkTitle>
							<FooterLink to="/signin">Book slot</FooterLink>
							<FooterLink to="/signin">Rent a car</FooterLink>
							<FooterLink to="/signin">Remodel car</FooterLink>
							
						</FooterLinkItems>
                        <FooterLinkItems>
						<FooterLinkTitle>Cars on Rent</FooterLinkTitle>
							<FooterLink to="/signin">Models</FooterLink>
							<FooterLink to="/signin">Rates</FooterLink>
							<FooterLink to="/signin">Terms</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Wrench King</SocialLogo>
                        <WebsiteRights>Wrench King @ {new Date().getFullYear()} All rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="/blank"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href='/' target="/blank"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target="/blank"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href='/' target="/blank"><FaTwitter /></SocialIconLink>
                            {/* <SocialIconLink href='//www.google.com' target="/blank"><FaLinkedin /></SocialIconLink> */}
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
