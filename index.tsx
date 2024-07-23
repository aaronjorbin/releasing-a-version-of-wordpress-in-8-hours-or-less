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

const Presentation = () => (
	<Deck template={ () => <DefaultTemplate /> }>
		<Intro />
		<Tiktok />
		<Whatbroke />
		<Behind />
		<Howithappens />
		<Whatwecanlearn />
		<Howupdateswork />
		<Howwebsiteswork />
		<Outro />
	</Deck>
);

createRoot( document.getElementById( 'app' )! ).render( <Presentation /> );
