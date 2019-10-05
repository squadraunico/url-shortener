import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import UrlInput from '../../components/UrlInput';

const { Header, Footer, Content } = Layout;

function Dashboard(props) {
	const style = {
		"header":{
			"background":'#02aa93',
			"fontWeight": 'bold',
			"fontSize": "24px"
		},
		"footer": {
			"background":'#02aa93',			
			"color": "black",
			"footerSection": {
				"fontSize":"16px",
				"fontWeight": 'bold',				
				"display": "flex",
				"justifyContent":"space-between",
				"squad": {
					"display": "flex",
					"flexDirection":"column",
					"alignItems": "self-start"
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
		
	}
	return (
		<div>
			<Layout>
				<Header style = {style.header} >URL Shortner</Header>
				<Content className="content">
					<UrlInput />
				</Content>
				<Footer style={style.footer}>
					<div className="footerSection" style={style.footer.footerSection}>
						<div className="squad" style={style.footer.footerSection.squad}>
							<a href="https://github.com/squadraunico" target="blank" style={style.footer.a}>Squadra Unico</a>
							<a href="https://github.com/squadraunico/url-shortener" target="blank" style={style.footer.a}>Contribute</a>
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
