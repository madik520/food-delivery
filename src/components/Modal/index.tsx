import { Dialog, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from '../../utils/mui/Link';

import CloseIcon from '../../assets/img/close.svg';
import EmptyCart from '../../assets/img/empty-cart.svg';

import type { IModal } from './Modal';

import styles from './Modal.module.scss';


const Modal = ({ isActive, onClose }: IModal) => {

  return (
    <Dialog className={styles.modalContainer} open={isActive} onClose={onClose}>
      <div className={styles.modalBlock}>
        <Button className={styles.iconBtn} onClick={onClose}>
          <Image src={CloseIcon} alt={'close-icon'} />
        </Button>
        <div className={styles.isEmptyText}>
          <Image src={EmptyCart} alt={'empty-cart'} />
          <Typography variant='h2'>Cart is empty</Typography>
        </div>
        <Link onClick={onClose} href={'/'}>
          <Button variant='contained'>
            View menu
          </Button>
        </Link>
      </div>
    </Dialog>
  )
};

export default Modal;