import React from 'react';
import './MainTemplate.css'

const MainTemplate = ({info}) => {
    return (
        <div className='mainTemplate' >
            <section>
                {info}
            </section>
        </div>
    );
};

export default MainTemplate;