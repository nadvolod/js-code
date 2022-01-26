import React from 'react';

const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article key={id} className='person'>
						<img src={image} alt={name}></img>
						<div>
							<p>{name}</p>
							<p>{age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
