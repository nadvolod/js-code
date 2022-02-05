import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: '100,000', text: 'SDETs Trained' },
	{ number: 50, text: 'Open Source Projects' },
	{ number: 1900, text: 'Github Followers' },
	{ number: 5000, text: 'Github Stars' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
