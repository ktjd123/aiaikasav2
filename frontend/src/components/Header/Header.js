import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import FaSearch from 'react-icons/lib/fa/search'
import FaStar from 'react-icons/lib/fa/star'
import FaBell from 'react-icons/lib/fa/bell'
import FaHome from 'react-icons/lib/fa/home'
import FaUser from 'react-icons/lib/fa/user'

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

    toTop = () => {
        window.scroll(0, 0)
    }

    render() {
        return (
            <div>
                <header>
                    <Link to='/' className='logo' onClick={this.toTop} >AIAIKASA</Link>
                    <section className='search'>
                        <div className='searchBox'>
                            <i><FaSearch /></i>
                            <input type='text'
                                placeholder='모든걸 검색해보세요'
                                onChange={this.onChangeSearch}
                                value={this.state.searchText}
                            />
                        </div>
                    </section>
                    <section className='menus'>
                        <Link to='/star' onClick={this.toTop} ><FaStar /></Link>
                        <a><FaBell /></a>
                        <Link to='/ktjd123' onClick={this.toTop} >peter</Link>
                    </section>
                </header>
                <footer>
                    <Link to='/' onClick={this.toTop} ><FaHome/></Link>
                    <Link to='/s' onClick={this.toTop}><FaSearch/></Link>
                    <button className='button' onClick={this.toTop} >업로드</button>
                    <Link to='/star'><FaStar/></Link>
                    <Link to='/u'><FaUser/></Link>
                </footer>
            </div>
        );
    }
}

export default Header;