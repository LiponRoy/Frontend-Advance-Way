import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const NabAntd = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className='navbar'>
			<div className='menu-toggle' onClick={toggleCollapsed}>
				<MenuOutlined />
			</div>
			<Menu theme='dark' mode='horizontal' inlineCollapsed={collapsed}>
				<Menu.Item key='1' icon={<HomeOutlined />}>
					Home
				</Menu.Item>
				<Menu.Item key='2' icon={<AppstoreOutlined />}>
					Products
				</Menu.Item>
				{/* Add more menu items as needed */}
			</Menu>
		</div>
	);
};

export default NabAntd;
