import { shallow, mount } from 'enzyme';
import React from 'react';
import MessageList from '.';

it('renders without crashing', () => {
  shallow(<MessageList messages={[]} />);
  shallow(<MessageList messages={[{body: "Sup dawg", createdAt: Date.now()}]} />);
});

it('renders the message body', () => {
  const message1 = {username: 'foo', body: 'Sup dawg'};
  const message2 = {username: 'bar', body: 'Yooo'};
  const component = mount(
    <MessageList messages={[message1, message2]} />
  );
  expect(component.find('li').first().find('.messagelist-item-body').text()).toEqual(message1.body);
  expect(component.find('li').last().find('.messagelist-item-body').text()).toEqual(message2.body);
});
