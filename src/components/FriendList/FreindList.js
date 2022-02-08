import styles from './FriendList.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        style={{ background: isOnline ? 'green' : 'red' }}
        className={styles.status}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendList;
