import { Slide, Grid, Heading, Notes, FlexBox } from 'spectacle';

const TikTokSlide = ( { text, time, date, notes }: SlideProps ) => (
	<Slide>
		<Grid
			gridColumnGap={ 2 }
			gridTemplateColumns={ 'repeat(2, 1fr)' }
			height={ '100%' }
		>
			<FlexBox height="100%" flexDirection="column">
				<Heading>{ date }</Heading>
				<Heading>{ time }</Heading>
			</FlexBox>
			<FlexBox height="100%" flexDirection="column">
				<Heading>{ text }</Heading>
			</FlexBox>
		</Grid>
		<Notes>{ notes }</Notes>
	</Slide>
);

type SlideProps = {
	text: string;
	time: string;
	date: string;
	notes?: string;
};

export default TikTokSlide;
