import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Blog posts={posts} />
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
