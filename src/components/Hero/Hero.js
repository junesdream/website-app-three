import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
	HeroVideo,
	HeroSection,
	HeroText,
	ButtonWrapper,
	HeroButton,
} from "./HeroStyles";
import Heero from "/Users/junes/Coding_Projects/website-app-three/src/assets/hero.mp4";

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src={Heero} autoPlay muted loop />
			<Container>
				<MainHeading>Your Information is secure with us</MainHeading>
				<HeroText>
					We provide the best information systems for clients all over
					the world
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
