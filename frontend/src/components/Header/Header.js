import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import FaSearch from 'react-icons/lib/fa/search'
import FaStar from 'react-icons/lib/fa/star'
import FaBell from 'react-icons/lib/fa/bell'

import './Header.css'

class Header extends Component {
    
    state = {
        searchText: ''
    }

    onChangeSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        return (
            <header>
                <Link to='/' className='logo' onClick={() => window.scroll(0,0)} >AIAIKASA</Link>
                <section className='search'>
                   <div className='searchBox'>
                        <i><FaSearch/></i>
                        <input type='text' 
                        placeholder='모든걸 검색해보세요'
                        onChange={this.onChangeSearch}
                        value={this.state.searchText}
                        />
                   </div> 
                </section>
                <section className='menus'>
                    <Link to='/star'><FaStar/></Link>
                    <a><FaBell/></a>
                    <Link to='/ktjd123'>peter</Link>
                </section>
            </header>
        );
    }
}

export default Header;