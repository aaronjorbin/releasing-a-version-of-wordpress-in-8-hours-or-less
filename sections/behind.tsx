import { Slide, FlexBox, Heading, Text, Notes } from 'spectacle';

// @ts-ignore
import imgUrl from  '../images/default-bsod.png' ;

const Behind = () => (
	<>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Behind the curtain</Heading>
				<Text>What goes on behind the scenes?</Text>
			</FlexBox>
			<Notes>Release at XX:XX</Notes>
		</Slide>

		<Slide backgroundImage={ 'url(' + imgUrl + ')' }>
			<FlexBox height="100%"></FlexBox>
		</Slide>
	</>
);

export default Behind;
