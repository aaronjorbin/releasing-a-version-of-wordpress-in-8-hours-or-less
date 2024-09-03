import { Slide, FlexBox, Heading, Notes, Stepper } from 'spectacle';

const Whatbroke = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Stepper
					tagName="h1"
					alwaysVisible
					values={ [
						'Nothing... But also everything',
					] }
				>
					{ ( value ) =>
						value ? (
							<Heading>{ value }</Heading>
						) : (
							<Heading>What Broke?</Heading>
						)
					}
				</Stepper>
			</FlexBox>
			<Notes>
				Nothing actually broke. The unit tests passed. The integration
				tests failed under certain conditions.
			</Notes>

			<FlexBox height="100%">
				<Stepper
					tagName="h1"
					alwaysVisible
					values={ [
						'cURL',
						'Over twenty billion installations',
						'Releases about every 39 days',
					] }
				>
					{ ( value ) =>
						value ? (
							<Heading>{ value }</Heading>
						) : (
							<Heading>What Broke?</Heading>
						)
					}
				</Stepper>
			</FlexBox>
			<Notes>
				You might have heard of this being a problem with Curl, but what
				is CURL? Client for URL. Started in 1998. It is EVERYWHERE.
				Based on 39 days per release, that's 9-10 releases per year.
				Security updates are not backported.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Stepper
					tagName="h1"
					alwaysVisible
					values={ [
						'Requests',
						"You can't rely on cURL being everywhere",
					] }
				>
					{ ( value ) =>
						value ? (
							<Heading>{ value }</Heading>
						) : (
							<Heading>WordPress Core Uses Requests</Heading>
						)
					}
				</Stepper>
			</FlexBox>
			<Notes>
				A part of the WordPress project Used outside of just WordPress.
			</Notes>
		</Slide>
	</>
);

export default Whatbroke;
