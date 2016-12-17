import test from 'ava';
import m from './';

test('gets filename for windows paths', t => {
	const fixtures = [
		'cat.gif'
	];

	fixtures.forEach(el => t.is(m('C:\\fakepath\\cat.gif'), el));
});
