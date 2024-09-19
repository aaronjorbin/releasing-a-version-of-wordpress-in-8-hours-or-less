import { Slide, FlexBox, Image, Heading, Notes } from 'spectacle';

// @ts-ignore
import tweetImg from '../images/francesca-tweet.png';
// @ts-ignore
import jorbinImg from '../images/jorbin-tweet.png';

const Intro = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					Releasing a Version of WordPress in 8 Hours or Less
				</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Image src={ tweetImg } />
			</FlexBox>
			<Notes>
				The day after the release of WordPress 6.4, one of the Release
				Coodinators, Francesca Marano, shared this tweet. And she&apos;s
				right, but also...
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Image src={ jorbinImg } />
			</FlexBox>
			<Notes>Oh how little did she know at this moment.</Notes>
		</Slide>
	</>
);

export default Intro;
