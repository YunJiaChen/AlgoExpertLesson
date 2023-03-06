// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Blog posts={posts} /> 
    </>
      

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
const posts = [
  {id:1, title:'Hello React', content:'Welcome to learning React!'},
  {id:2, title:'Iinstalltion', content:'You can install React from npm.'}
];

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.content}
        </li>
      )}
    </ul>
  );

  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

export default App;
