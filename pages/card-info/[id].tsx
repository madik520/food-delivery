import CardDescription from "../../src/components/CardDescription";
import ButtonBack from "../../src/components/ButtonBack";

import styles from './CardInfo.module.scss';

const DescriptionPage = () => {
  return (
    <section className={styles.descriptionSection}>
      <div className={styles.descWrapper}>
        <ButtonBack />
        <CardDescription />
      </div>
    </section>
  );
};

export default DescriptionPage;