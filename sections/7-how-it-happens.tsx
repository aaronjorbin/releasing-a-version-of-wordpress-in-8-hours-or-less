import { Slide, FlexBox, Heading, Notes, Image } from 'spectacle';

// @ts-ignore
import forumsImg from '../images/w.org-forums.png';
// @ts-ignore
import hostingImg from '../images/make-hosting.png';
// @ts-ignore
import svenImg from '../images/sven-tweet.png';

const Howithappens = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>How does a release happen?</Heading>
			</FlexBox>
			<Notes>
				Many moving parts. No one person decides there should be a
				release. Each situation is different.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading fontSize="400px">👂</Heading>
			</FlexBox>
			<Notes>
				Feedback loops. We look and listen for problems and areas where
				a response may be needed.
			</Notes>
		</Slide>

		<Slide backgroundImage={ 'url(' + forumsImg + ')' }>
			<FlexBox height="100%"></FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ hostingImg } width={ '65%' }></Image>
			</FlexBox>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Image src={ svenImg } width={ '90%' }></Image>
			</FlexBox>
			<Notes>
				Update Fatigue is a real problem. We need to balance the
				benefits of the update with the pain of the bugs that are known.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading>The vocal minority</Heading>
			</FlexBox>
			<Notes>
				&quot;The number of people who create content on the internet
				represents approximately 1% (or less) of the people actually
				viewing that content&quot; Engage with more of the non-vocal
				users. Make measured decisions.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Who Decides When to Release</Heading>
			</FlexBox>
			<Notes>
				There is no one person who decides when to release. It is a team
				decision. The release lead is the final decision maker. Matt is
				rarely involved in the decision. the process takes place in
				public and anyone can participate.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					Not Being Able to Update is a Security Concern
				</Heading>
			</FlexBox>
			<Notes>
				One of the most important ways to keep a site secure is to keep
				it updated. In the instance of 6.4.1, the pain of a bug that
				could block websites from updating was considered a security
				concern.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Only One Version is Supported</Heading>
			</FlexBox>
			<Notes>
				While WordPress backports security fixes as a courtesy, only the
				most recent version is supported. You should always be running
				the latest version of WordPress.
			</Notes>
		</Slide>
	</>
);

export default Howithappens;
