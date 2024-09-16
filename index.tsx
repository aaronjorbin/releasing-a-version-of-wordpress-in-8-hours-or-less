import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate } from 'spectacle';

import Intro from './sections/1-intro';
import Tiktok from './sections/2-tiktok';
import Howwebsiteswork from './sections/3-how-websites-work';
import Howupdateswork from './sections/4-how-updates-work';
import Whatbroke from './sections/whatbroke';
import Behind from './sections/6-behind';
import Howithappens from './sections/7-how-it-happens';
import Whatwecanlearn from './sections/8-what-we-can-learn';
import Hostingtests from './sections/9-hosting-tests';
import Outro from './sections/10-outro';

import theme from './theme';
// @ts-ignore
import backgroundImg from './images/topography-dark.svg';

const Presentation = () => (
	<Deck
		theme={ theme }
		backgroundImage={ 'url(' + backgroundImg + ')' }
		template={ () => <DefaultTemplate color={ '#085357' } /> }
	>
		<Intro />
		<Tiktok />
		<Howwebsiteswork />
		<Howupdateswork />
		<Whatbroke />
		<Behind />
		<Howithappens />
		<Whatwecanlearn />
		<Hostingtests />
		<Outro />
	</Deck>
);

createRoot( document.getElementById( 'app' )! ).render( <Presentation /> );
