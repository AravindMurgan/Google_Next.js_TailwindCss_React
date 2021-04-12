import React from 'react';

function Avatar({ url }) {
	return (
		<div>
			<img className='rounded-full' loading='lazy' src={url} alt='profile' />
		</div>
	);
}

export default Avatar;
