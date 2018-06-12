
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import Greeting from '../components/Greeting';

const wrapper = shallow(<Greeting />);
console.log(wrapper);
expect(wrapper.toHaveText('bonjour, world'));

// describe('Greeting', () => {
//   it('should render text', () => {
//     const wrapper = shallow(<Greeting message='bonjour' />);
//     expect(wrapper.toHaveText('bonjour, world'));
//   });
// })