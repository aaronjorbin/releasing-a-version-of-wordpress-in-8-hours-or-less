import { Slide, FlexBox, Heading, Notes } from 'spectacle';

// @ts-ignore
import imgUrl from '../images/hosting-screenshot.png';

const Whatwecanlearn = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>Lessons for WordPress Core</Heading>
				<Notes>
					You need to test The yankees are a terrible franchise
					Historical Context only helps so much (we live in
					unprecedented times) Divide and Conquer (if it can happen in
					parallel, have it happen in parallel) Take breaks, drink
					water, walk dogs, feed families.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>The Reliability of Updates, depends on you!</Heading>
				<Notes>
					This is especially true for Hosting providers. Ask your host
					how they are getting ready for new versions of WordPress and
					if the answer does not involve them testing, go find a new
					host.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide backgroundImage={ 'url(' + imgUrl + ')' }>
			<FlexBox height="100%"></FlexBox>
			<Notes>
				If your site broke during the upgrade to 6.4 and you do not see
				your host on this list, ask them why. If you are a host and do
				not see yourself on this list, ask in the #hosting channel and
				get yourself added.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Process Documenation is a Blueprint</Heading>
				<Notes>
					The release documenation never thought of a situation like
					this, so we had to make it up as we went along. But we still
					relied on ever release lesson we ever learned.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Move with Deliberate Haste</Heading>
				<Notes>
					In high pressure situations, it is easy to try to move as
					fast as you can, however it is important to slow down both
					for yourself and for the success you need. Allowing a few
					hours between the RC and final release let people be ready
					and allowed one additional bug to be fixed.
				</Notes>
			</FlexBox>
		</Slide>
	</>
);

export default Whatwecanlearn;
