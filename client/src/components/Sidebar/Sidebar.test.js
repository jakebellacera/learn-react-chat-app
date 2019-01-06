import { shallow } from 'enzyme';
import React from 'react';
import Sidebar from '.';

it('renders without crashing', () => {
  shallow(
    <Sidebar room={'foo'} />
  );
});
