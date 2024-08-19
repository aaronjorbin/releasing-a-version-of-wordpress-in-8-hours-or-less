import { Slide, FlexBox, Heading, Notes } from 'spectacle';
import TikTokSlide from '../components/TikTokSlide';

const TikTok = () => (
	<>
		<TikTokSlide
			text="6.4 is officially released"
			time="20:00"
			date="November 7, 2023"
		/>
		<TikTokSlide
			text="Issue is first reported to Requests"
			time="10:53"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Issue is first reported in Support Forums"
			time="13:18"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Issue is first reported to WordPress Core"
			time="16:22"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Issue is first raised in slack"
			time="18:05"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Problomatic Code is reverted in Requests"
			time="18:13"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Division of work and plan for potential release"
			time="19:07"
			date="November 8, 2023"
			notes="We move the specific issue to a seperate room and scrub every issue/report"
		/>
		<TikTokSlide
			text="Scrub begins"
			time="19:11"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Updates to 6.4 are paused and wp.org is made immune from the issue"
			time="19:12"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Requests 2.0.9 is released"
			time="19:34"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Requests 2.0.9 is merged into WordPress Trunk"
			time="19:46"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Exact conditions of the issue are identified and published"
			time="20:08"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Fix for bug in wp_admin_notice is backported to 6.4"
			time="20:08"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Fix for bug in wpdb is backported to 6.4"
			time="20:36"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="WordPress 6.4.1 RC1 is released for testing."
			time="21:29"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="Fix for bug in bulk edit is backported to 6.4"
			time="23:20"
			date="November 8, 2023"
		/>
		<TikTokSlide
			text="WordPress 6.4.1 is released"
			time="01:26"
			date="November 9, 2023"
		/>
	</>
);

export default TikTok;
