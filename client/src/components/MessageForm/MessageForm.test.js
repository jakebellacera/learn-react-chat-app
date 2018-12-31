import { shallow, mount } from 'enzyme';
import React from 'react';
import MessageForm from '.';

it('renders without crashing', () => {
  const sendMessageMock = jest.fn();
  shallow(<MessageForm onSendMessage={sendMessageMock} />);
});

it('sends a message on submit', () => {
  const body = 'This is my message';
  const sendMessageMock = jest.fn((msg) => msg);
  const component = mount(
    <MessageForm onSendMessage={sendMessageMock} />
  );
  component.find('input').simulate('change', { target: { value: body }});
  component.find('form').simulate('submit');
  expect(sendMessageMock.mock.results[0].value).toEqual(body);
});

it('clears the text input on submit', () => {
  const sendMessageMock = jest.fn();
  const component = mount(
    <MessageForm onSendMessage={sendMessageMock} />
  );
  component.find('input').instance().value = 'a';
  component.find('form').simulate('submit');
  expect(component.find('input').instance().value).toEqual('');
});
