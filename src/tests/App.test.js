import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
describe('App Component Test', () => {
    it('Should search box render',()=>{
        const wrapper = mount(<App />);
        const result = wrapper.find('input.search-box');
        expect(result).toHaveLength(1);
    });
    it('Should Range selector render', ()=>{
        const wrapper = mount(<App />);
        const result = wrapper.find('select.select-range');
        expect(result).toHaveLength(1);
    });
})