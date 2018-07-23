import React from 'react';
import ViewContactScreen from '../../app/screens/ViewContactScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ViewContactScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});