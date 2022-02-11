import propTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={styles.item} key={id}>
      <span
        className={styles.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img src={avatar} alt={name} className={styles.avatar} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};
