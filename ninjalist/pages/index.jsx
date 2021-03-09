import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
		<Head>
			<title>Ninja List | Home</title>
			<meta name="keywords" content="ninjas"/>
		</Head>
		<div>
			<h1 className={styles.title}>Homepage</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores
				illo, eius itaque reiciendis quisquam, saepe officiis architecto qui ipsa
				repellendus cum consequuntur labore inventore nisi perspiciatis? Beatae,
				illum totam?
			</p>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores
				illo, eius itaque reiciendis quisquam, saepe officiis architecto qui ipsa
				repellendus cum consequuntur labore inventore nisi perspiciatis? Beatae,
				illum totam?
			</p>
			<Link href="/ninjas">
				<a className={styles.btn}>See ninja Listing</a>
			</Link>
		</div>
		</>
	);
}
