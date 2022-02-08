import styles from './CardUser.module.css';

const CardUser = ({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Description}>
        <img src={avatar} alt={username} className={styles.Avatar} />
        <p className={styles.Name}>{username}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li className={styles.item}>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// CardUser.propTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats,
//   followers: PropTypes.number,
//   views: PropTypes.number,
//   likes: PropTypes.number,
// };

export default CardUser;
