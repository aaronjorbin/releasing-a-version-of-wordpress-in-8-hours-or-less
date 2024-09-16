import { Slide, Grid, Heading, Notes, FlexBox } from 'spectacle';

const timeSinceRelease = ( date: string, time: string ) => {
	return (
		'Time Since Release: ' +
		TimeDiff(
			new Date( `${ date } ${ time }` ),
			new Date( 'November 7, 2023 20:00' )
		)
	);
};

const timePreparingRelease = ( date: string, time: string ) => {
	return (
		'Time Preparing Release: ' +
		TimeDiff(
			new Date( 'November 8, 2023 18:05' ),
			new Date( `${ date } ${ time }` )
		)
	);
};

const transition = {
	from: {},
	enter: {},
	leave: {},
};

const TikTokSlide = ( { text, time, date, notes, since }: SlideProps ) => (
	<Slide transition={ transition }>
		<FlexBox
			height="100%"
			flexDirection="column"
			justifyContent="space-between"
		>
			<FlexBox flexDirection="row" font>
				<Heading fontSize="text" color="primary">
					{ date }
				</Heading>
				<Heading fontSize="text" color="primary">
					{ time }
				</Heading>
			</FlexBox>
			<FlexBox flexDirection="column">
				<Heading>{ text }</Heading>
			</FlexBox>
			<FlexBox flexDirection="column">
				<Heading fontSize="text" color="primary">
					{ since
						? timeSinceRelease( date, time )
						: timePreparingRelease( date, time ) }
				</Heading>
			</FlexBox>
		</FlexBox>
		<Notes>{ notes }</Notes>
	</Slide>
);

/**
 * calculate the time difference
 * @param {Date} startTime
 * @param {Date} endTime
 * @returns {Error|string}
 * @constructor
 */
const TimeDiff = ( startTime: Date, endTime: Date ) => {
	startTime = new Date( startTime );

	endTime = endTime ? new Date( endTime ) : new Date();

	const startTimeInMS = startTime.getTime();

	const endTimeInMS = endTime.getTime();

	if ( ! startTimeInMS ) return new Error( 'Invalid start date' );

	if ( ! endTimeInMS ) return new Error( 'Invalid end date' );

	/**
	 * time difference in milliseconds
	 * @type {number}
	 */
	let timeDifference = endTimeInMS - startTimeInMS;

	const tense = timeDifference > 0 ? 'ago' : 'after';

	timeDifference = timeDifference > 0 ? timeDifference : -timeDifference;

	/**
	 * time difference in seconds
	 * @type {number}
	 */
	const secondsAgo = timeDifference / 1000;

	/**
	 * time difference in minutes
	 * @type {number}
	 */
	const minutesAgo = secondsAgo / 60;

	/**
	 * time difference in hours
	 * @type {number}
	 */
	const hoursAgo = minutesAgo / 60;

	/**
	 * time difference in days
	 * @type {number}
	 */
	const daysAgo = hoursAgo / 24;

	const value = [];

	if ( hoursAgo >= 24 ) {
		const day = Math.floor( daysAgo );
		if ( day === 1 ) {
			value.push( `${ day } day` );
		} else {
			value.push( `${ day } days` );
		}
	}
	if ( minutesAgo >= 60 ) {
		const hour = Math.floor( hoursAgo ) - Math.floor( daysAgo ) * 24;
		if ( hour <= 0 ) {
		} else if ( hour === 1 ) {
			value.push( `${ hour } hour` );
		} else {
			value.push( `${ hour } hours` );
		}
	}
	if ( secondsAgo >= 60 ) {
		const minute = Math.floor( minutesAgo ) - Math.floor( hoursAgo ) * 60;
		if ( minute === 1 ) {
			value.push( `${ minute } minute` );
		} else {
			value.push( `${ minute } minutes` );
		}
	}
	console.log( value );
	if ( value.length === 0 ) {
		return 'None';
	}
	return value.join( ', ' );
};

type SlideProps = {
	text: string;
	time: string;
	date: string;
	notes?: string;
	since: boolean;
};

export default TikTokSlide;
