import CardDescription from "../../src/components/CardDescription";

import styles from './CardInfo.module.scss';

const DescriptionPage = () => {
  return (
    <section className={styles.descriptionSection}>
      <CardDescription />
    </section>
  );
};

export default DescriptionPage;