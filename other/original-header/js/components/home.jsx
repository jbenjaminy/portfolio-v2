import React from 'react';
import NavUp from './nav-up';
import NavDown from './nav-down';

function Home() {
	return (
		<div className='home'>
            <NavUp/>
			<div className='col'>
				<h3>JAMES BENJAMIN YOUNG</h3>
			</div>
			<NavDown/>
		</div>
	);
};

export default Home;