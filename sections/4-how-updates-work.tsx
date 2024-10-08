import { Slide, FlexBox, Heading, Notes, SlideLayout } from 'spectacle';

// @ts-ignore
import versionCheckImg from '../images/version-check.png';

const Howupdateswork = () => (
	<>
		<Slide>
			<FlexBox height="100%">
				<Heading>How Updates Work</Heading>
			</FlexBox>
			<Notes>
				Jon: check the server, get the files, bipity bopity boop
			</Notes>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading>Sites check for an update every 12 hours</Heading>
			</FlexBox>
		</Slide>
		<SlideLayout.VerticalImage
			src={ versionCheckImg }
			alt={ 'Response to version check API' }
			title={ 'Response to version check API' }
			listItems={ [
				<>
					<Notes>Jorbin:</Notes>
					Your WordPress ask update server for info
				</>,
				'If the filesystem and constants allow it, the site will download the highest auto-update it can',
			] }
		/>
		<SlideLayout.List
			title={ 'What Affects the Updates' }
			items={ [
				<>
					<Notes>
						Jorbin Star and Jon finish: In rare occasions, WordPress
						will change to require certain extensions. IN WP 5.3,
						the native JSON extension was made a requirement to run
						WordPress.
					</Notes>
					the `AUTOMATIC_UPDATER_DISABLED` and `WP_AUTO_UPDATE_CORE`
					constant
				</>,
				'If WordPress is unable to write to the filesystem',
				'If WordPress is stored in Version Control',
				'The PHP and MySQL versions',
				'How extensions are configured',
			] }
		/>
	</>
);

export default Howupdateswork;
