import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Demo/Hello';

describe('Hello', () => {
  it('Should render with default state', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.instance().state.name).toEqual('');
    expect(wrapper.find('input').at(0).props().value).toEqual('');
    expect(wrapper.find('h1').at(0).props().children[0]).toEqual('Please input your name.');
    expect(wrapper.find('h1').at(0).props().children[1]).toBeNull();
  });

  it('Should show the name in h1 when input the name', () => {
    const event = {
      target: {
        value: 'Tom',
      },
    }
    const wrapper = shallow(<Hello />);
    wrapper.find('input').at(0).props().onChange(event);
    expect(wrapper.find('h1').at(0).props().children[0]).toEqual(`Hello ${event.target.value}`);
  });

  it('Should show the name in h1 and Greetings when input the name and the name is Arthur', () => {
    const event = {
      target: {
        value: 'Arthur',
      },
    }
    const wrapper = shallow(<Hello />);
    wrapper.find('input').at(0).props().onChange(event);
    const expectResult = `${wrapper.find('h1').at(0).props().children[0]}${wrapper.find('h1').at(0).props().children[1]}`;
    expect(expectResult).toEqual(`Hello ${event.target.value}, Nice to meet you!`);
  });
});