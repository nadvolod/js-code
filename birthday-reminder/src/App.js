import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [people, setPeople] = useState(data);

	return (
		<main>
			<section className='container'>
				<h1>{people.length} birthdays</h1>
				<List people={people}></List>
				<button data-testid='clear' onClick={() => setPeople([])}>
					clear all
				</button>
			</section>
		</main>
	);
}

export default App;
