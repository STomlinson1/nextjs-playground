import Head from 'next/head';
import styles from '../styles/Home.module.css';

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>Homepage</h1>
			<Footer />
		</div>
	);
}
