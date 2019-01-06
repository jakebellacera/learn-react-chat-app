import { shallow, mount } from 'enzyme';
import React from 'react';
import Modal from '.';

describe('modal component', () => {
  it('renders without crashing', () => {
    shallow(<Modal render={jest.fn()} />);
  });

  it('does not give users the option to close the dialog by default', () => {
    const handleCloseMock = jest.fn();
    const component = mount(
      <Modal
        render={jest.fn()}
        handleClose={handleCloseMock}
      />
    );
    expect(component.exists('.modal-dialog-close')).toEqual(false);
    component.find('.modal-backdrop').simulate('click');
    expect(handleCloseMock.mock.calls.length).toEqual(0);
  });

  it('the userCanClose prop gives users the option to close the dialog', () => {
    const handleCloseMock = jest.fn();
    const component = mount(
      <Modal
        userCanClose
        render={jest.fn()}
        handleClose={handleCloseMock}
      />
    );
    expect(component.exists('.modal-dialog-close')).toEqual(true);
    component.find('.modal-backdrop').simulate('click');
    expect(handleCloseMock.mock.calls.length).toEqual(1);
  });
});
