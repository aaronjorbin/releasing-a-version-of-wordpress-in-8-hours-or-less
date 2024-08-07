import { Slide, FlexBox, Heading, Notes, Image } from 'spectacle';

import forumsImg from '../images/w.org-forums.png';
import hostingImg from '../images/make-hosting.png';
import xLogoImg from '../images/x-logo-black.png';

const Howithappens = () => (
	<>
		<Slide>
			<FlexBox height="100%" >
				<Heading>
					How does a release happen?
				</Heading>
			</FlexBox>
			<Notes>Many moving parts.</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%" >
				<Heading fontSize="400px">
					👂
				</Heading>
			</FlexBox>
			<Notes>Feedback loops. How do we look and listen for problems that a response may be needed?</Notes>
		</Slide>

		<Slide backgroundImage={ 'url(' + forumsImg + ')' }>
			<FlexBox height="100%">
			</FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ hostingImg } width={ "65%" }></Image>
			</FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ xLogoImg } width={ "30%" }></Image>
			</FlexBox>
		</Slide>

	</>
);

export default Howithappens;
