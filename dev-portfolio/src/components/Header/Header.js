import Link from 'next/link';
import React from 'react';
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiFillYoutube,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '10px',
					}}
				>
					<DiCssdeck size='3rem'></DiCssdeck>
					<Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#projects'>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
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
	</Container>
);

export default Header;
