import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import UrlInput from '../../components/UrlInput';

const { Header, Footer, Content } = Layout;

function Dashboard(props) {
<<<<<<< HEAD
<<<<<<< HEAD
	const style = {
=======
	const s = {
>>>>>>> dashboardUi
=======
	const style = {
>>>>>>> Footer UI
		"header":{
			"background":'#02aa93',
			"fontWeight": 'bold',
			"fontSize": "24px"
		},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Footer UI
		"footer": {
			"background":'#02aa93',			
			"color": "black",
			"footerSection": {
				"fontSize":"16px",
				"fontWeight": 'bold',				
				"display": "flex",
				"justify-content":"space-between",
				"squad": {
					"display": "flex",
					"flex-direction":"column",
					"align-items": "self-start"
				},
				"contactUs": {
					"display":"flex"
				}
			},
			"a": {
				"color": "black",
				"padding": "10px"
			}
		}	
<<<<<<< HEAD
=======
>>>>>>> dashboardUi
=======
>>>>>>> Footer UI
		
	}
	return (
		<div>
			<Layout>
<<<<<<< HEAD
<<<<<<< HEAD
				<Header style = {style.header} >URL Shortner</Header>
=======
				<Header style = {s.header} >URL Shortner</Header>
>>>>>>> dashboardUi
=======
				<Header style = {style.header} >URL Shortner</Header>
>>>>>>> Footer UI
				<Content className="content">
					<UrlInput />
				</Content>
				<Footer style={style.footer}>
					<div className="footerSection" style={style.footer.footerSection}>
						<div className="squad" style={style.footer.footerSection.squad}>
							<a href="https://github.com/squadraunico" target="blank" style={style.footer.a}>Squadra Unico</a>
							<a href="https://github.com/squadraunico/url-shortner" target="blank" style={style.footer.a}>Contribute</a>
						</div>
						<div className="contactUs" style={style.footer.footerSection.contactUs}>
							<a href="https://github.com/squadraunico" target="blank" style={style.footer.a}>Contact Us</a>
						</div>
					</div>
				</Footer>
			</Layout>
		</div>
	);
}

Dashboard.propTypes = {};

export default Dashboard;
