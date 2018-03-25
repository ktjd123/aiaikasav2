import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import FaSearch from 'react-icons/lib/fa/search'
import './Header.css'

class Header extends Component {
    
    state = {
        isFocus: false
    }

    toggleFocus = () => {
        this.setState({
            isFocus: !this.state.isFocus
        })
    }

    render() {
        return (
            <header>
                <Link to='/' className='logo' onClick={() => window.scroll(0,0)} >AIAIKASA</Link>
                <section className='search'>
                   <div className={`searchBox ${this.state.isFocus ? 'focus': undefined}`}>
                        <i><FaSearch/></i>
                        <input type='text' 
                        placeholder='모든걸 검색해보세요' 
                        onFocus={this.toggleFocus} 
                        onBlur={this.toggleFocus} 
                        className={this.state.isFocus ? 'focus' : undefined}
                        />
                   </div> 
                </section>
                <section className='menus'>
                    lorem ipsum
                </section>
            </header>
        );
    }
}

export default Header;