import React from 'react';

function Avatar({ url }) {
	return (
		<div>
			<img loading='lazy' className='h-10' src={url} alt='profile' />
		</div>
	);
}

export default Avatar;
