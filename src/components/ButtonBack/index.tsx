import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '../../utils/mui/Link';

import styles from './ButtonBack.module.scss';

const ButtonBack = () => {
	return (
		<div className={styles.btnBackWrapper}>
			<Link href={'/'}>
				<button>
					<ArrowBackIosIcon />
				</button>
				<span>Back to home</span>
			</Link>
		</div>
	);
};

export default ButtonBack;
