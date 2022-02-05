import React from 'react';
import { Div3, SocialIcons } from './HeaderStyles';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiFillYoutube,
} from 'react-icons/ai';

const SocialDetails = () => {
	return (
		<>
			<Div3>
				<SocialIcons href='https://github.com/nadvolod'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.linkedin.com/in/nikolayadvolodkin/'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://twitter.com/Nikolay_A00'>
					<AiFillTwitterCircle size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.youtube.com/ultimateqa'>
					<AiFillYoutube size='3rem' />
				</SocialIcons>
			</Div3>
		</>
	);
};

export default SocialDetails;
