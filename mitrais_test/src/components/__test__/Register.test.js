import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Register from '../contents/Register/Register';

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
       shallow(<Register />)
     });
 });

 it('check the email validation', () =>{
    const component = mount(<Register />);
    component.find('input#email').simulate('change', {target: {value: 'abc'}});
    component.find('button.register-btn').simulate('submit');

    expect(component.state('emailError')).toEqual('Please enter a valid email address');
    component.unmount();
 });

 it('check the empty mobile number validation', () =>{
    const component = mount(<Register />);
    component.find('input#mobileNumber').simulate('change', {target: {value: ''}});
    component.find('button.register-btn').simulate('submit');

    expect(component.state('mobileNumberError')).toEqual('Please enter an Indonesian mobile number');
    component.unmount();
 });
 it('check the wrong mobile number validation', () =>{
    const component = mount(<Register />);
    component.find('input#mobileNumber').simulate('change', {target: {value: '123'}});
    component.find('button.register-btn').simulate('submit');

    expect(component.state('mobileNumberError')).toEqual('Please enter valid Indonesian mobile number. Begin with +62.');
    component.unmount();
 });
 it('check the empty first name validation', () =>{
    const component = mount(<Register />);
    component.find('input#firstName').simulate('change', {target: {value: ''}});
    component.find('button.register-btn').simulate('submit');

    expect(component.state('firstNameError')).toEqual('Please enter the first name');
    component.unmount();
 });
 
 it('check the empty last name validation', () =>{
    const component = mount(<Register />);
    component.find('input#mobileNumber').simulate('change', {target: {value: ''}});
    component.find('button.register-btn').simulate('submit');

    expect(component.state('lastNameError')).toEqual('Please enter the last name');
    component.unmount();
 });