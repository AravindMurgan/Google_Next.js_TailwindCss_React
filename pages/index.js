import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>


			{/* Header */}
			<header className='flex justify-between p-5'>
				{/* Left-side */}
				<div className='flex space-x-4 items-center'>
					<p>About</p>
					<p>Store</p>
				</div>

				{/* Right-side */}
				<div className='flex space-x-4 items-center'>
					<p>Gmail</p>
					<p>Images</p>

					{/* Icon */}

					{/* Avatar */}
				</div>
			</header>

			{/* Body */}

			{/* Footer */}
		</div>
	);
}
