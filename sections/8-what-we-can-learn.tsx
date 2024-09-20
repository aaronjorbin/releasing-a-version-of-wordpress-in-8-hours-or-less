import { Slide, FlexBox, Heading, Notes } from 'spectacle';

const Whatwecanlearn = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>Lessons for WordPress Core</Heading>
				<Notes>
					Jorbin: Some of the lessons are general ones for anyone
					working in a high pressure situation such as remembering to
					take breaks, drink water, walk dogs, feed families.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Divide and Conquer</Heading>
				<Notes>
					Jorbin: If work can be done in parrallel, have it done in
					parrallel. Trust your team to work on things and communicate
					updates. By having multiple people working on different
					parts of the release, we were able to get more done in less
					time.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Process Documenation is a Blueprint</Heading>
				<Notes>
					Jon: The release documenation never thought of a situation
					like this, so we had to make it up as we went along. But we
					still relied on ever release lesson we ever learned.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Move with Deliberate Haste</Heading>
				<Notes>
					Jorbin: In high pressure situations, it is easy to try to
					move as fast as you can, however it is important to slow
					down both for yourself and for the success you need.
					Allowing a few hours between the RC and final release let
					people be ready and allowed one additional bug to be fixed.
				</Notes>
			</FlexBox>
		</Slide>
	</>
);

export default Whatwecanlearn;
