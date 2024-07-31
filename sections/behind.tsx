import { Slide, FlexBox, Heading, Text, Quote, Notes } from 'spectacle';

const Behind = () => (
	<>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Behind the curtain</Heading>
				<Text>What goes on behind the scenes?</Text>
			</FlexBox>
			<Notes>Release at XX:XX</Notes>
		</Slide>

		<Slide
			backgroundImage="url(images/default-bsod.png)"
		>
			<FlexBox height="100%">
			</FlexBox>
		</Slide>
	</>
);

export default Behind;
