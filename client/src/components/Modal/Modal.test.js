import { shallow, mount } from 'enzyme';
import React from 'react';
import Modal from '.';

describe('modal component', () => {
  it('renders without crashing', () => {
    shallow(<Modal render={jest.fn()} />);
  });

  it('does not give users the option to close the dialog by default', () => {
    const component = mount(
      <Modal render={jest.fn()} />
    );
    expect(component.exists('.modal-dialog-close')).toEqual(false);
    component.find('.modal-backdrop').simulate('click');
    expect(component.state().isOpen).toEqual(true);
  });

  it('the userCanClose prop gives users the option to close the dialog', () => {
    const component = mount(
      <Modal render={jest.fn()} userCanClose />
    );
    expect(component.exists('.modal-dialog-close')).toEqual(true);
    component.find('.modal-backdrop').simulate('click');
    expect(component.state().isOpen).toEqual(false);
  });
});
