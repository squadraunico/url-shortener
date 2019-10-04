import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Checkbox } from 'antd';
import SendIcon from '../../assets/icons/send.svg';

function UrlInput(props) {
	const rowStyle = {
		padding: '24px'
	}
	return (
		<Row type="flex" justify="center">
			<Col span={16} className="column">
				<Input
					className="input-url"
					placeholder="input the url"
					onChange={value => console.log(value)}
					suffix={<img src={SendIcon} alt="enter" />}
				/>
				<Row type="flex" justify="space-around" style={rowStyle}>
					<Col span={4}>
						<Checkbox onChange={e => console.log(e.target)}>
							Custom Url
						</Checkbox>
					</Col>
					<Col span={8}>
						<Checkbox onChange={e => console.log(e.target)}>
							Password Protected
						</Checkbox>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

UrlInput.propTypes = {};

export default UrlInput;
