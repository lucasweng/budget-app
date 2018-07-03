import React from 'react';
import { shallow } from 'enzyme';
import ConfirmRemovalModal from '../../components/ConfirmRemovalModal';
import expenses from '../fixtures/expenses';

let isModalOpen, onToggleModal, onRemove, wrapper;
beforeEach(() => {
  isModalOpen = true;
  onToggleModal = jest.fn();
  onRemove = jest.fn();
  wrapper = shallow(<ConfirmRemovalModal
    expense={expenses[2]}
    isModalOpen={isModalOpen}
    onToggleModal={onToggleModal}
    onRemove={onRemove}
  />);
});

test('should correctly render ConfirmRemovalModal', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick', () => {
  wrapper.find('button').at(0).simulate('click');
  wrapper.find('button').at(1).simulate('click');
  expect(onToggleModal).toHaveBeenCalled();
  expect(onRemove).toHaveBeenCalled();
});
