import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ITitle } from './Title';

import styles from './Title.module.scss';

const Title = ({ title, itemInCart }: ITitle) => {
	return (
		<Container maxWidth={'xl'} className={styles.title}>
			<div className={styles.titleStroke}></div>
			<Typography variant="h2">{title}</Typography>
			{itemInCart && (
				<Typography color={'primary'} variant="body2" component={'span'}>
					(item in cart {itemInCart})
				</Typography>
			)}
		</Container>
	);
};

export default Title;
