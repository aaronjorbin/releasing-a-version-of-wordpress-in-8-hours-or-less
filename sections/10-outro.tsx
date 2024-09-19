import {
	Slide,
	FlexBox,
	Heading,
	Notes,
	SlideLayout,
	UnorderedList,
	ListItem,
	Text,
} from 'spectacle';

const Jon = () => (
	<>
		<Heading>Jonathan Desrosiers</Heading>
		<UnorderedList color="secondary">
			<ListItem>@desrosj</ListItem>
			<ListItem>Bluehost Sponsored WordPress Committer</ListItem>
			<ListItem>Go Red Sox</ListItem>
			<ListItem>jonwp.dev</ListItem>
		</UnorderedList>
	</>
);

const Jorbin = () => (
	<>
		<Heading>Aaron Jorbin</Heading>
		<UnorderedList color="secondary">
			<ListItem>@jorbin</ListItem>
			<ListItem>Independently Sponsored WordPress Committer</ListItem>
			<ListItem>Go White Sox</ListItem>
			<ListItem>aaron.jorb.in</ListItem>
		</UnorderedList>
	</>
);

const Outro = () => (
	<>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Final Lessons</Heading>
				<Notes>You should be testing</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">
					What is the plan for when your plan fails?
				</Heading>
				<Notes>
					You are going to run into the unexpected, how do you prepare
					for it? Have you made your team feel empowered to use your
					documentation as a guide rather than a must follow? A crisis
					is a test.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Keep Something in Reserve</Heading>
				<Notes>
					If you do not have a pitcher in the Bullpen, your only
					option is to leave the starter in. By having someone (or
					something if you are a one person show) in reserve, you can
					handle the unexpected.
				</Notes>
			</FlexBox>
		</Slide>
		<SlideLayout.Quote
			children="Releasing Software is 90% mental and the other half is physical"
			attribution="Yogi Berra, basically"
			quoteProps={ { color: 'secondary' } }
		/>
		<SlideLayout.TwoColumn left={ <Jon /> } right={ <Jorbin /> } />
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Props</Heading>
				<Text fontSize="36px">
					@afragen @clorith @pbiron @schlessera @azaozz @davidbaumwald
					@tomsommer @nexflaszlo @howdy_mcgee @baxbridge @earnjam
					@timothyblynjacobs @johnbillion @flixos90 @joedolson
					@jeffpaul @zunaid321 @courane01 @audrasjb @tacoverdo
					@ironprogrammer @webcommsat @otto42 @barry @chanthaboune
					@rajinsharwar @aaroncampbell @peterwilsoncc @anandau14
					@iandunn @matthewjho @coffee2code @boogah @jason_the_adams
					@joemcgill @johnjamesjacoby @jrf @renehermi @dlh @mukesh27
					@sumitbagthariya16 @starbuck @sergeybiryukov @swissspiddy
				</Text>
				<Notes>
					WordPress 6.4.1 and this talk would not be possible without
					these people
				</Notes>
			</FlexBox>
		</Slide>
	</>
);

export default Outro;
