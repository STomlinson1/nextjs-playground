import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores
				illo, eius itaque reiciendis quisquam, saepe officiis architecto qui ipsa
				repellendus cum consequuntur labore inventore nisi perspiciatis? Beatae,
				illum totam?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores
				illo, eius itaque reiciendis quisquam, saepe officiis architecto qui ipsa
				repellendus cum consequuntur labore inventore nisi perspiciatis? Beatae,
				illum totam?
			</p>
			<Link href="/ninjas">
				<a>See ninja Listing</a>
			</Link>
		</div>
	);
}
