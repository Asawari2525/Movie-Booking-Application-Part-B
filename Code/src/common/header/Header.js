
import { Component } from 'react';
import './Header.css';
import logo from './logo.svg';
export default class Header extends Component{

render(){
    return <div className="heading">
                    <img className="rotate-image" src={logo} alt="Logo" />;
            </div>;
}
}