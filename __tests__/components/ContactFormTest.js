import React from 'react';
import ViewContactScreen from '../../app/components/ContactForm';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ViewContactScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});