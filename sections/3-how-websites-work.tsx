import { Slide, FlexBox, Heading, Notes } from 'spectacle';

const Howwebsiteswork = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					Let&apos;s step back and look at How Websites Work
				</Heading>
				<Notes>
					Systems are very interconnected. You don’t control 100% of
					the involved components (MySQL version is often managed by
					hosts, infrastructure, etc.) Your exact configuration could
					very well be unique to you Server versions, PHP versions, OS
					versions, Curl versions, etc.
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Your Webstack is Unique</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>PHP Version</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>PHP Configuration</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Apache/Nginx/Caddy</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>MySQL/MariaDB</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					This is all before we get to Themes and Plugins
				</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Your Website is a special snowflake</Heading>
			</FlexBox>
			<Notes>
				This doesn&apos;t even touch on tech that PHP interacts with or
				the configuration flags for how nginx is built. Part of why
				WordPress is so great is that it can be run under a variety of
				conditions with any theme and combination of plugins. This also
				makes WordPress really complicated. With 59,000 plugins in the
				directory, every site has 4 plugins active, that means there are
				505 quadrillion possible combinations. That doesn&apos;t even
				consider the 12,000 themes available in the WordPress.org
				directory.
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					You shouldn&apos;t need to worry about this (but please keep
					it up to date)
				</Heading>
			</FlexBox>
		</Slide>
	</>
);

export default Howwebsiteswork;
