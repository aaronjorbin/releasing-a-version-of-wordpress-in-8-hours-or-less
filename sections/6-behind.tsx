import {
	Slide,
	FlexBox,
	Heading,
	Text,
	Notes,
	UnorderedList,
	ListItem,
	Image,
} from 'spectacle';

// @ts-ignore
import imgUrl from '../images/default-bsod.png';
// @ts-ignore
import wsodUrl from '../images/fatal-error-protection.png';

const Behind = () => (
	<>
		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Behind the curtain</Heading>
				<Text>How does a release happen?</Text>
			</FlexBox>
			<Notes>Jon</Notes>
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
			<Notes>Jorbin</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%" flexDirection="column">
				<Heading textAlign="center">Release types</Heading>
				<UnorderedList>
					<ListItem>
						Unplanned
						<UnorderedList>
							<ListItem>Minor (Security)</ListItem>
							<ListItem>Minor (OMGBBQ)</ListItem>
						</UnorderedList>
					</ListItem>
				</UnorderedList>
			</FlexBox>
			<Notes>
				Jon: When reporting security vulnerabilities, the project asks
				that everyone practice responsible disclosure to the security
				team. Sometimes bad actors do not follow this practice,
				resulting in unplanned security releases. Ticket volume, support
				volume, potential surface area, long term consequences.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading textAlign="center">Auto-updates for everyone</Heading>
			</FlexBox>
			<Notes>
				Jorbin: Auto-updates ensure a more secure ecosystem. Can make it
				easier for plugin and theme developers.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading textAlign="center">Design for the majority</Heading>
			</FlexBox>
			<Notes>
				Jorbin: &quot;Many end users are non-technically minded. They
				don&apos;t know what AJAX is, nor do they care about which
				version of PHP they are using.&quot; Or in this case, which
				version of WordPress. Chrome updates just happen. You have no
				idea. You SHOULDN&apos;T need to know. Backwards compatibility
				is a foundational pillar to our project.
			</Notes>
		</Slide>

		<Slide backgroundImage={ 'url(' + imgUrl + ')' }>
			<FlexBox height="100%"></FlexBox>
			<Notes>Jon</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ wsodUrl } width={ '65%' }></Image>
				<Notes>Jon</Notes>
			</FlexBox>
		</Slide>
	</>
);

export default Behind;
