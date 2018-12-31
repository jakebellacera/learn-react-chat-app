import { shallow, mount } from 'enzyme';
import React from 'react';
import MessageList from '.';

it('renders without crashing', () => {
  shallow(<MessageList messages={[]} />);
  shallow(<MessageList messages={[{body: "Sup dawg", createdAt: Date.now()}]} />);
});

it('renders the message body', () => {
  const body1 = 'Sup dawg';
  const body2 = 'Yooo';
  const messages = [
    {body: body1},
    {body: body2}
  ];
  const component = mount(
    <MessageList messages={messages} />
  );
  expect(component.find('li').first().text()).toEqual(body1);
  expect(component.find('li').last().text()).toEqual(body2);
});
