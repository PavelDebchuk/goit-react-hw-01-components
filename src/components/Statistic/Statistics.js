import styles from './Statistic.module.css';

const Statistics = ({ label, percentage }) => {
  return (
    <li className={styles.Item}>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{percentage}%</span>
    </li>
  );
};

export default Statistics;
