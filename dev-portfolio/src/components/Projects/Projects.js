import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider></SectionDivider>
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{[0, 1, 2, 3, 4, 5].map((project) => (
				<div>{project}</div>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
