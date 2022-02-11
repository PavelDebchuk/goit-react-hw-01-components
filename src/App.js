import CardUser from './components/CardUser/CardUser';
import cardUsers from './components/CardUser/user.json';
import Statistics from './components/Statistic/Statistics';
import data from './components/Statistic/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <CardUser
        username={cardUsers.username}
        tag={cardUsers.tag}
        location={cardUsers.location}
        avatar={cardUsers.avatar}
        followers={cardUsers.stats.followers}
        views={cardUsers.stats.views}
        likes={cardUsers.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
