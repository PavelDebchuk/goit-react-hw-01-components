import styles from './transactions.module.css';

const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tableInfo}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistory;
