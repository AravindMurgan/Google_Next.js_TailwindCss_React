import Head from 'next/head';
import Avatar from './components/Avatar/Avatar';
import {MicrophoneIcon,SearchIcon,ViewGridIcon} from '@heroicons/react/solid';
import Image from 'next/image';
import Footer from './components/Footer/Footer';

export default function Home() {
	return (
		<div className='flex flex-col justify-center items-center box-border h-screen relative' >
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<header className='flex w-full justify-between p-5 text-sm text-gray-700 absolute top-0 '>
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
			<form className='flex flex-col items-center mt-25 w-4/5' >
				<Image
				src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
				width={272}
				height={92}
				className='flex justify-center al'
				/>

				<div  className='flex mt-5 w-full hover:shadow-lg focus-within:shadow-lg
				max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
				sm:max-w-xl lg:max-w-2xl'>
					<SearchIcon 
					className='h-5 mr-3  text-gray-500'
					/>
					<input type="text" className=' flex-grow focus:outline-none' />
					<MicrophoneIcon 
					className='h-5 mr-3  text-gray-500'
					/>

				</div>

				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button className='btn' >Google Search</button>
					<button className='btn' >I'm Feeling Lucky</button>
				</div>
			</form>

			{/* Footer */}
			<Footer/>
		</div>
	);
}
