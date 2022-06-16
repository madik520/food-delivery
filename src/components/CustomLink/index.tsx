import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from '../../utils/mui/Link';
import Modal from '../Modal';

import { ICustomLink } from './CustomLink';

import React, { useState, MouseEvent } from 'react';

import CartIcon from '../../assets/img/cart.svg';
import styles from './CustomLink.module.scss';

const CustomLink = ({ text, withIcon, isShopCart, shopCount, link, icon, onClick }: ICustomLink) => {
	const [open, setOpen] = useState<boolean>(false);

	const goingToCart = (e: MouseEvent<HTMLAnchorElement>) => {
		if (shopCount === 0) {
			e.preventDefault();
			setOpen(true);
		} else {
			setOpen(false);
		}
	};

	const closeModal = () => setOpen(false);

	return (
		<>
			<Link onClick={goingToCart} className={styles.customLink} href={link}>
				<Button onClick={onClick} className={styles.customButton} variant={'contained'}>
					<span>{text}</span>
					{isShopCart ? (
						<div className={styles.shopCartWrapper}>
							{Number(shopCount) > 0 ? (
								<div className={styles.shopCount}>
									<span>{shopCount}</span>
								</div>
							) : (
								<Image src={icon} alt={'icon'} />
							)}
						</div>
					) : (
						withIcon && (
							<div className={styles.withIcon}>
								<Image src={withIcon} alt={'icon'} />
							</div>
						)
					)}
				</Button>
			</Link>
			<Modal onClose={closeModal} isActive={open} />
		</>
	);
};

export default CustomLink;
