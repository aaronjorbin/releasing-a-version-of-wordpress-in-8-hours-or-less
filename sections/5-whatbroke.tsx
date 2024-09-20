import { Slide, FlexBox, Heading, Notes, SlideLayout } from 'spectacle';

// @ts-ignore
import changeset from '../images/requests-changeset-657.png';

const Whatbroke = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>What Broke?</Heading>
			</FlexBox>
			<Notes>Nothing actually broke. The unit tests passed.</Notes>
		</Slide>
		<Slide backgroundImage={ 'url(' + changeset + ')' }>
			<FlexBox height="100%"></FlexBox>
			<Notes>
				Innocent enough, right? Merged to Requests on 17 August, 2023
				Synced to Core on 11 September 2023 Available in every beta and
				RC for 6.4
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>What Broke?</Heading>
			</FlexBox>
			<Notes>So what broke?</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Nothing... But also everything</Heading>
			</FlexBox>
			<Notes>
				For WordPress 6.4 There were four betas with three release
				candidates. During that time 64 bugs were reported and fixed.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading>What Broke?</Heading>
			</FlexBox>
			<Notes>
				So what broke? To answer that, we need to look at very ubiqutous
				piece of software.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading>cURL</Heading>
			</FlexBox>
			<Notes>
				Client for URL. It is EVERYWHERE. Releases on average every 39
				days, that&apos;s 9-10 releases per year. It&apos;s been
				releasing that often since 1996. So it&apos;s something that is
				older than some folks in the audience (7 years older than
				WordPress).
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>20B+ installations</Heading>
			</FlexBox>
			<Notes>
				cURL is running on your phone and quite possibly on your
				refregiatro (but if it is, you should try to catch it). cURL
				also doesn&apos;t backport changes including security fixes but
				many distribtions backport them.
			</Notes>
		</Slide>

		<Slide>
			<FlexBox height="100%">
				<Heading>Requests</Heading>
			</FlexBox>
			<Notes>
				A part of the WordPress project Used outside of just WordPress.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>You can&apos;t rely on cURL being everywhere</Heading>
			</FlexBox>
			<Notes>
				This is needed since while cURL is everywhere, it is not
				actually everywhere, and may not be properly configured.
				WordPress has a philosophy to work. cURL has an interesting API,
				to say the least.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Out of the box</Heading>
			</FlexBox>
			<Notes>
				We ask for as few technical details as possible during the setup
				process. The Requirements are kept as minimal as possible which
				means cURL is not required tfor WordPress to work.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>What Broke?</Heading>
			</FlexBox>
			<Notes>jon yell: Jorbin, just answer the qustion</Notes>
		</Slide>
		<SlideLayout.List
			title="Conditions for the Break"
			animateListItems={ true }
			items={ [
				<>
					<Notes>
						Under certain circumstances, websites could not complete
						most outbound HTTP requests. This means requests to
						things like payment providers for ecommerce sites,
						requests to embed content using oembed, but more
						importantly it means some sites could no longer reach
						WordPress.org to requests updates. WordPress.org
						temporarily disabled keep-alive for HTTP 1.1. HTTP 2.0
						is unaffected (no support for keep-alive). Version 7.47
						of cURL was released in 2015 during the same month as
						WordPress 4.4. 20 versions of WordPress has passed.
					</Notes>
					cURL: must use HTTP 1
				</>,
				'cURL: version between 7.22 & 7.46, or set to use HTTP 1.x on cURL >= 7.47',
				'Keep-Alive must be enabled (default for HTTP 1.1, Connection: Keep-Alive header required for HTTP 1.0)',
				'Connection: Keep-Alive must be supported & respected by the server',
			] }
		></SlideLayout.List>
	</>
);

export default Whatbroke;
