import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import { Layout } from 'antd';
import ShowContent from './ShowContent';

const { Sider, Content } = Layout;

async function getUsers() {
  const users = await fetch('https://jsonplaceholder.typicode.com/posts').data;
  return users;
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider><Sidebar/></Sider>
        <Content><ShowContent users={getUsers()} /></Content>
      </Layout>
    </div>
  );
}

export default App;
