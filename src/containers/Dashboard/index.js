import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import UrlInput from '../../components/UrlInput';

const { Header, Footer, Content } = Layout;

function Dashboard(props) {
	const s = {
		"header":{
			"background":'#02aa93',
			"fontWeight": 'bold',
			"fontSize": "24px"
		},
		
	}
	return (
		<div>
			<Layout>
				<Header style = {s.header} >URL Shortner</Header>
				<Content className="content">
					<UrlInput />
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	);
}

Dashboard.propTypes = {};

export default Dashboard;
