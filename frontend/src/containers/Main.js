import React, { Component } from 'react';
import {Header, MainTemplate, Info, Card} from 'components'

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainTemplate
                    info={<Card/>}
                />
            </div>
        );
    }
}

export default Main;