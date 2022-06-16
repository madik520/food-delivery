import Container from '@mui/material/Container';
import CustomLink from '../CustomLink';
import { Tab, Tabs, Box } from '@mui/material';
import { ICustomTubs } from './Tabs';

import { useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../utils/hooks/AppHooks';
import { RootState } from '../../store/store';

import { tabsData } from '../../utils/datas/tabsData/tabsData';

import CartIcon from '../../assets/img/cart.svg';
import styles from './Tabs.module.scss';

const CustomTabs = ({ top = 0, isTop, handleClickGetId }: ICustomTubs) => {
	const [value, setValue] = useState<number>(0);
	const shoppingCart = useAppSelector((state: RootState) => state.shoppingCart.shoppingCart);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const isHandleClick = (id: string | undefined) => {
		if (handleClickGetId) {
			handleClickGetId(id);
		}
	};

	const tabsClass = classNames(styles.tabser, {
		[styles.scrollTabs]: top > 10
	});

	return (
		<div id={'tabsCart'} className={tabsClass}>
			<Box className={styles.tabsBox}>
				<Container className={styles.tabsContainer} maxWidth={'xl'}>
					<Tabs
						value={value}
						onChange={handleChange}
						className={styles.tabsWrapper}
						textColor={'inherit'}
						indicatorColor={'secondary'}
						variant={'scrollable'}
						scrollButtons={false}
					>
						{tabsData.map(({ id, label, sectionId }) => {
							return <Tab key={id} onClick={() => isHandleClick(sectionId)} className={styles.tabs} label={label} />;
						})}
					</Tabs>
					{isTop && (
						<div className={styles.shoppingCartSticky}>
							<CustomLink
								link={'/cart'}
								text={'Cart'}
								isShopCart={true}
								shopCount={shoppingCart.length}
								icon={CartIcon}
							/>
						</div>
					)}
				</Container>
			</Box>
		</div>
	);
};

export default CustomTabs;
