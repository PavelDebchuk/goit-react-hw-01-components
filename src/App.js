import CardUser from './components/CardUser/CardUser';
import cardUsers from './components/CardUser/user.json';
import Statistics from './components/Statistic/Statistics';
import statisticData from './components/Statistic/data.json';
import FriendList from './components/FriendList/FreindList';
import friendList from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionHistory from './components/TransactionHistory/transactions.json';
import stylesStatistic from './components/Statistic/Statistic.module.css';
import stylesTransation from './components/TransactionHistory/transactions.module.css';

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
      <section className={stylesStatistic.statistics}>
        <h2 className={stylesStatistic.title}>Upload stats</h2>
        <ul className={stylesStatistic.stat_list}>
          {statisticData.map(statistic => (
            <Statistics
              key={statistic.id}
              label={statistic.label}
              percentage={statistic.percentage}
            />
          ))}
        </ul>
      </section>
      <ul className="friend-list">
        {friendList.map(freind => (
          <FriendList
            key={freind.id}
            isOnline={freind.isOnline}
            avatar={freind.avatar}
            name={freind.name}
          />
        ))}
      </ul>
      <table className={stylesTransation.transactionHistory}>
        <thead>
          <tr className={stylesTransation.tableTitle}>
            <th className={stylesTransation.tableTh}>Type</th>
            <th className={stylesTransation.tableTh}>Amount</th>
            <th className={stylesTransation.tableTh}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map(transaction => (
            <TransactionHistory
              key={transaction.id}
              id={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

//=====================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
