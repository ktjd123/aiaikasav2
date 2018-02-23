import React from 'react';
import './MainTemplate.css'

const MainTemplate = ({info}) => {
    return (
        <div>
            <section>
                {info}
            </section>
        </div>
    );
};

export default MainTemplate;