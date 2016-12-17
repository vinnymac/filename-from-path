'use strict';

module.exports = value => {
	const regex = new RegExp('^.*\\\\');

	return value.replace(regex, '');
};
