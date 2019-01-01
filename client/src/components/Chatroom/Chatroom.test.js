import { shallow } from 'enzyme';
import React from 'react';
import Chatroom from '.';

it('renders without crashing', () => {
  shallow(
    <Chatroom
      username="foobar"
      messages={[]}
      postMessage={jest.fn()}
    />
  );
});
