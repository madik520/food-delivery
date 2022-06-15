import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ITitle } from "./Title";

import styles from './Title.module.scss';

const Title = ({ title }:ITitle) => {
    return(
        <Container maxWidth={'xl'} className={styles.title}>
            <div className={styles.titleStroke}></div>
            <Typography variant="h2">{title}</Typography>
        </Container>
    );
};

export default Title;