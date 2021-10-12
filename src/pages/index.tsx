import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import babyDevLogo from '../assets/babyDevLogo.png';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
	<>
		<Head>
			<title>Baby Dev | Home</title>
		</Head>

		<Container>
			<h1>Hello Baby Dev</h1>
			<Image src={babyDevLogo} />
		</Container>
	</>
);
export default Home;
