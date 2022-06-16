import Header from '../Header';
import Footer from '../Footer';

import { FC } from 'react';

import styles from './layout.module.scss';

const Layout: FC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
