import Head from 'next/head';
import Avatar from './components/Avatar/Avatar';
import {MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<header className='flex w-full justify-between p-5 text-sm text-gray-700'>
				{/* Left-side */}
				<div className='flex space-x-4 items-center'>
					<p className='link'>About</p>
					<p className='link'>Store</p>
				</div>

				{/* Right-side */}
				<div className='flex space-x-4 items-center'>
					<p className='link'>Gmail</p> 
					<p className='link'>Images</p>

					{/* Icon */}
					<ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer ' />


					{/* Avatar */}
					<Avatar url='https://avatars.githubusercontent.com/u/44913228?s=400&u=315c706f3ee96d88eb0ace3b9edca45c027f3db1&v=4' />
				</div>
			</header>

			{/* Body */}
			<form>
				<Image />

			</form>

			{/* Footer */}
		</div>
	);
}
