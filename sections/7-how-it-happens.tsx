import { Slide, FlexBox, Heading, Notes, Image } from 'spectacle';

import forumsImg from '../images/w.org-forums.png';
import hostingImg from '../images/make-hosting.png';
import svenImg from '../images/sven-tweet.png';

const Howithappens = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>How does a release happen?</Heading>
			</FlexBox>
			<Notes>
				Many moving parts.
				No one person decides there should be a release.
				Each situation is different.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading fontSize="400px">👂</Heading>
			</FlexBox>
			<Notes>
				Feedback loops. We look and listen for problems and areas where a response may be needed.
			</Notes>
		</Slide>

		<Slide backgroundImage={ 'url(' + forumsImg + ')' }>
			<FlexBox height="100%"></FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ hostingImg } width={ '65%' }></Image>
			</FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ svenImg } width={ '90%' }></Image>
			</FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading>The vocal minority</Heading>
			</FlexBox>
			<Notes>
				&quot;The number of people who create content on the internet
				represents approximately 1% (or less) of the people actually
				viewing that content&quot; Engage with more of the non-vocal
				users. Make measured decisions.
			</Notes>
		</Slide>
	</>
);

export default Howithappens;
