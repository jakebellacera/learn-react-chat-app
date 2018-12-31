import { shallow, mount } from 'enzyme';
import React from 'react';
import WelcomeMessage from '.';

describe('welcome message component', () => {
  it('renders without crashing', () => {
    shallow(<WelcomeMessage identifyUser={jest.fn()} />);
  });

  it('identifies the user on form submit', () => {
    const username = 'foobar';
    const identifyUserMock = jest.fn(name => name);
    const component = mount(
      <WelcomeMessage identifyUser={identifyUserMock} />
    );
    component.find('input').simulate('change', { target: { value: username }});
    component.find('form').simulate('submit');
    expect(identifyUserMock.mock.results[0].value).toEqual(username);
  });
});
