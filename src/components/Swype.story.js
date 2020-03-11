import React from 'react';
import SwiperComponent from './Swype';
import { cards } from '../cards/cards';

export const Swype = () => <SwiperComponent cards={cards} />;

export default {
    title: 'Swype',
    component: Swype
};

