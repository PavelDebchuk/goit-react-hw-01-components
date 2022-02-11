import propTypes from 'prop-types';
import styles from './Statistic.module.css';

function StatisticsItem({ id, label, percentage }) {
  return (
    <li className={styles.item} key={id}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
}

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
