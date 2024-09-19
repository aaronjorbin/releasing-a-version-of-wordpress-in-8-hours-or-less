import { Slide, FlexBox, Heading, Notes } from 'spectacle';

const Howwebsiteswork = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>
					Let&apos;s step back and look at How Websites Work
				</Heading>
				<Notes>
					Systems are very interconnected. Websites may seem simple,
					but under the hood, each one is unique.
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
				Jon Takes this part: This doesn&apos;t even touch on tech that
				PHP interacts with or the configuration flags for how nginx is
				built.
        Part of why WordPress is so great is that it can be run under a variety of
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
				<Notes>
					end with &quot;Becouse WordPress has a philosophy to:&quot;
				</Notes>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Strive for Simplicity</Heading>
			</FlexBox>
			<Notes>
				We’re never done with simplicity. We want to make WordPress
				easier to use with every single release. Updates used to be a
				manual process that was tricky for a lot of people. Now, anyone
				can update easily and with automatic updates, you don&apos;t
				even need to worry about updates.
			</Notes>
		</Slide>
	</>
);

export default Howwebsiteswork;
