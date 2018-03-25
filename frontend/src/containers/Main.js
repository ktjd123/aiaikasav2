import React, { Component } from 'react';
import {Header, MainTemplate, Info} from 'components'

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainTemplate
                    info={<Info/>}
                />
            </div>
        );
    }
}

export default Main;