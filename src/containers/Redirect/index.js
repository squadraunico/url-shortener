import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Redirect(props) {
	const {
		match: {
			params: { id }
		}
	} = props;

	useEffect(() => {
		async function getCorrespondingUrl(id) {
			// retrieve data from firebase and redirect on the url stored in the db
		}
		getCorrespondingUrl(id);
	}, [id]);
	return <div>Redirect Component</div>;
}

Redirect.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default Redirect;
