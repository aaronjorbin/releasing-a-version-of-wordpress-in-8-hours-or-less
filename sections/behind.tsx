import { Slide, FlexBox, Heading, Text, Notes, UnorderedList, ListItem } from 'spectacle';

// @ts-ignore
import imgUrl from  '../images/default-bsod.png' ;

const Behind = () => (
	<>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Behind the curtain</Heading>
				<Text>How does a release happen?</Text>
			</FlexBox>
			<Notes>Release at XX:XX</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Release types</Heading>
				<UnorderedList>
					<ListItem>
						Planned
						<UnorderedList>
							<ListItem>Major</ListItem>
							<ListItem>Minor (Maintenance)</ListItem>
							<ListItem>Minor (Security)</ListItem>
							<ListItem>Minor (Maintenance & Security)</ListItem>
						</UnorderedList>
					</ListItem>
				</UnorderedList>
			</FlexBox>
			<Notes>Release at XX:XX</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Release types</Heading>
				<UnorderedList>
					<ListItem>
						Unplanned
						<UnorderedList>
							<ListItem>Minor (Security)</ListItem>
							<ListItem>Minor (Something is broken)</ListItem>
						</UnorderedList>
					</ListItem>
				</UnorderedList>
			</FlexBox>
			<Notes>Release at XX:XX</Notes>
		</Slide>

		<Slide backgroundImage={ 'url(' + imgUrl + ')' }>
			<FlexBox height="100%"></FlexBox>
		</Slide>
	</>
);

export default Behind;
