import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Hello Next.js</h1>
			{/* Header */}
			<header>
				{/* Left-side */}
				<div className=''>
        <p>About</p>
        <p>Store</p>

        </div>

				{/* Right-side */}
				<div className=''>
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
