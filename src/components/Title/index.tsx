import Typography from "@mui/material/Typography";

import { ITitle } from "./Title";

import styles from './Title.module.scss';

const Title = ({ title }:ITitle) => {
    return(
        <div className={styles.title}>
            <div className={styles.titleStroke}></div>
            <Typography variant="h2">{title}</Typography>
        </div>
    );
};

export default Title;