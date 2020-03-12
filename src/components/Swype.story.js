import React from "react";
import SwypeComponent from "./Swype";
import { cards } from './cards';
import './Swype.css';


export const Swype = () => <SwypeComponent cards={cards} />

export default {
    title: 'Swype'
}