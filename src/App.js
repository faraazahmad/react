import React from 'react';
import { Table, Menu } from 'antd';
import './App.css';
import SubMenu from 'antd/lib/menu/SubMenu';

function App() {
  return (
    <div className="App">
      <Menu
        mode="inline">
        <SubMenu key="sub1"
        title={
          <span>Navigation One</span>
        }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
