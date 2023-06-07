import styles from './ShopsPage.module.scss';

const ShopsPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.shopsContainer}>
          <ul>
            <li>Pizza</li>
            <li>Sushi</li>
            <li>Desserts</li>
          </ul>
        </div>
        <div className={styles.cardsContainer}></div>
      </div>
    </div>
  );
};

export default ShopsPage;
