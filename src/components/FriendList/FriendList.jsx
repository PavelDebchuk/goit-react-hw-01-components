import styles from './FriendList.module.css';
import FriendListItem from './FreindListItem';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}

export default FriendList;
