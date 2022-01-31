import CardUser from "./components/CardUser";
import cardUsers from './user.json';

export default function App() {
  return <div>
     <CardUser
        username={cardUsers.username}
        tag={cardUsers.tag}
        location={cardUsers.location}
        avatar={cardUsers.avatar}
        followers={cardUsers.stats.followers}
        views={cardUsers.stats.views}
        likes={cardUsers.stats.likes}
      />
  </div>
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
