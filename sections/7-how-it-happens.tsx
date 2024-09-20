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
				users. Make measured decisions. It&apos;s also not an insult to
				be in the vocal minority. We have both been in that group at
				various times. For 6.4.1, there was enough feedback that showed
				this was not just a case of vocal minority.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Core Decision Making</Heading>
			</FlexBox>
			<Notes>
				The core team engages in consensus seeking to make decisions.
				That means we try to seek out all opinions and find the best
				ones that lack strong opposition. Disagree and commit. Strong
				opinions loosely held. It&apos;s perfectly reasonable to
				disagree. But we must push forward.
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
				public and anyone can participate. In the case of 6.4.1, enough
				contributors that showed up felt this was significant enough to
				be addressed ASAP.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Minor Release Leads</Heading>
			</FlexBox>
			<Notes>
				Minor Releases are led by a small group (usually 1-3 people) who
				are experienced contributors to WordPress Core. This is
				generally Core Committers who want to prioritize maintaince.
				They make the final decision on what goes into the release and
				when it is ready.
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
