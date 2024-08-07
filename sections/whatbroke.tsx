import { Slide, FlexBox, Heading, Notes, Stepper, SlideLayout } from 'spectacle';

// @ts-ignore
import changeset from '../images/requests-changeset-657.png';

const Whatbroke = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Stepper
					tagName="h1"
					alwaysVisible
					values={ [
						'cURL',
						'Client for URL',
						'Started in 1998',
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
				is CURL?
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Stepper
					tagName="h1"
					alwaysVisible
					values={ [
						'Started by Ryan McCue',
						'A part of the WordPress project',
						'Used outside of just WordPress',
						'Why?',
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
		</Slide>
		<Slide backgroundImage={ 'url(' + changeset + ')' }>
			<FlexBox height="100%">
			</FlexBox>
			<Notes>
				Innocent enough, right?

				Merged to Requests on 17 August, 2023
				Synced to Core on 11 September 2023

				Available in every beta and RC for 6.4
			</Notes>
		</Slide>
		<SlideLayout.List 
			title='Conditions for the Break'	
			animateListItems={ true }
			
			items={ [
				'cURL must default to HTTP 1 (Not true since 27 January 2016)',
				'cURL must be version 7.22 or later',
				'Connection: Keep-Alive must be respected by the server (which it usually should)'
			]}
		/>
	</>
);

export default Whatbroke;
