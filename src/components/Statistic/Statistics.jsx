import styles from './Statistic.module.css';
import StatisticsItem from './StatisticsItem';

function Statistics({ stats, title }) {
  return (
    <section className={styles.stats}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
