import React from "react";
import { shallow, mount } from '../enzyme';

import List from './List';

test('List Component Test', () => {
        const items = ['one', 'two', 'three'];
        const wrapperShallow = shallow(<List items={items} />);
        const wrapperFull = mount(<List items={items} />);

        console.log(wrapperFull.debug())

        expect(wrapperShallow.find('.list-items')).toBeDefined();
        expect(wrapperShallow.find('.item')).toHaveLength(items.length);
            
        expect(wrapperFull.find('.list-items')).toBeDefined();
        expect(wrapperFull.find('.item')).toHaveLength(items.length);
})