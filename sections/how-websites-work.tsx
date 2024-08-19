import { Slide, FlexBox, Heading, Notes } from 'spectacle';

const Howwebsiteswork = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>How Websites Work</Heading>
				<Notes>
					Systems are very interconnected. You don’t control 100% of
					the involved components (MySQL version is often managed by
					hosts, infrastructure, etc.) Your exact configuration could
					very well be unique to you Server versions, PHP versions, OS
					versions, Curl versions, etc.
				</Notes>
			</FlexBox>
		</Slide>
	</>
);

export default Howwebsiteswork;
