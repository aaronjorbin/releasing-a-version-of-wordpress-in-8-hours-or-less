import { Slide, FlexBox, Image, Heading } from 'spectacle';

const tweetImg = '../images/francesca-tweet.png';
const jorbinImg = '../images/jorbin-tweet.png';

const Intro = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					Releasing a Version of WordPress in 8 hours or less
				</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Image src={ tweetImg } />
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Image src={ jorbinImg } />
			</FlexBox>
		</Slide>
	</>
);

export default Intro;
