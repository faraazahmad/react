import React from 'react';
import { Menu } from 'antd';

function Sidebar() {
    return (
      <div>
        <Menu
          mode="inline"
          theme="dark">
            <Menu.Item key="1">
              Dashboard
            </Menu.Item>
            <Menu.Item key="2">
              Posts
            </Menu.Item>
            <Menu.Item key="3">
              Users
            </Menu.Item>
        </Menu>
      </div>
    );
  }
  
export default Sidebar;  