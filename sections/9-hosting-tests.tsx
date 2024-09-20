import {Slide, FlexBox, Heading, Notes, Image} from 'spectacle';

// @ts-ignore
import imgUrl from '../images/hosting-screenshot.png';
import multiImg from '../images/hosting-screenshot-multi.png';

const Hostingtests = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>The Reliability of Updates, depends on you!</Heading>
				<Notes>
					This is especially true for Hosting providers. Ask your
					host how they are getting ready for new versions of
					WordPress and if the answer does not involve them testing,
					go find a new host.
				</Notes>
			</FlexBox>
		</Slide>

		<Slide backgroundImage={ 'url(' + imgUrl + ')' }>
			<FlexBox height="100%"></FlexBox>
			<Notes>
				If your site broke during the upgrade to 6.4 and you do not see
				your host on this list, ask them why. If you are a host and do
				not see yourself on this list, ask in the #hosting channel and
				get yourself added.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ multiImg } width={ '65%' }></Image>
			</FlexBox>
			<Notes>
				Now supports multiple reports per commit to allow for multiple
				environment types, multiple PHP or database versions, operating
				systems, product levels, etc..
			</Notes>
		</Slide>
	</>
);

export default Hostingtests;
