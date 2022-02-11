import propTypes from 'prop-types';
import styles from './transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableTitle}>
          <th className={styles.tableTh}>Type</th>
          <th className={styles.tableTh}>Amount</th>
          <th className={styles.tableTh}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody className={styles.backgroundSilver} key={item.id}>
          <tr className={styles.tableInfo}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};
