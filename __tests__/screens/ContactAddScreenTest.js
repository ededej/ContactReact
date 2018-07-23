import React from 'react';
import ContactAddScreen from '../../app/screens/ContactAddScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ContactAddScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});