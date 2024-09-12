import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate } from 'spectacle';

import Intro from './sections/intro';
import Outro from './sections/outro';
import Tiktok from './sections/tiktok';
import Behind from './sections/behind';
import Howithappens from './sections/how-it-happens';
import Howupdateswork from './sections/how-updates-work';
import Howwebsiteswork from './sections/how-websites-work';
import Whatbroke from './sections/whatbroke';
import Whatwecanlearn from './sections/what-we-can-learn';
import Hostingtests from './sections/hosting-tests';

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
