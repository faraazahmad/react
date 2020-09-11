import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import { Layout } from 'antd';
import ShowContent from './ShowContent';
import Axios from 'axios';

const { Sider, Content } = Layout;

function getUsers() {
  Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => response.data);
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider><Sidebar/></Sider>
        <Content><ShowContent getUsers={getUsers} /></Content>
      </Layout>
    </div>
  );
}

export default App;
