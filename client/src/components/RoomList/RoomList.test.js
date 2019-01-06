import { shallow } from 'enzyme';
import React from 'react';
import RoomList from '.';

it('renders without crashing', () => {
  shallow(
    <RoomList
      rooms={['foo']}
      room="foo"
      addRoom={jest.fn()}
      removeRoom={jest.fn()}
    />
  );
});
