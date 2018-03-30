import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Card.css'

import TimeAgo from 'react-timeago'
import koreanString from 'react-timeago/lib/language-strings/ko'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

class Card extends Component {
    render() {
        const formatter = buildFormatter(koreanString)
        return (
            <div className='card'>
                <section className='info'>
                    <Link to='/' className='writer'>
                        <div className='profilePicture' style={{ background: `url()`, backgroundSize: 'contain', backgroundPosition: 'center' }}/>
                        <div className='profileNickname'>dummy nickname</div>
                    </Link>
                    <Link to='/p/' className='time'>
                        <TimeAgo formatter={formatter} date='3290' />
                    </Link>
                </section>
                <section className='main'>
                    
                </section>
                <section className='reaction'>
                    
                </section>
            </div>
        );
    }
}

export default Card;