import { Slide, FlexBox, Heading, Notes, Stepper  } from 'spectacle';

const Whatbroke = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Stepper tagName="h1" alwaysVisible values={
					[ 'cURL', 
					  'Client for URL',
					  'Started in 1998',
					  'Over twenty billion installations',
					  'Releases about every 39 days'
					]
					}>
					{ ( value ) =>
						value ? 
							<Heading>{ value }</Heading> :
						<Heading>What Broke?</Heading>
					}
				</Stepper>
			</FlexBox>
			<Notes>You might have heard of this being a problem with Curl, but what is CURL?</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Stepper tagName="h1" alwaysVisible values={
					[ 'Started by Ryan McCue', 
					  'A part of the WordPress project',
					  'Used outside of just WordPress',
					  'Why?',
					  "You can't rely on cURL being everywhere"
					]
					}>
					{ ( value ) =>
						value ? 
							<Heading>{ value }</Heading> :
						<Heading>WordPress Core Uses Requests</Heading>
					}
				</Stepper>
			</FlexBox>
		</Slide>
	</>
);

export default Whatbroke;
