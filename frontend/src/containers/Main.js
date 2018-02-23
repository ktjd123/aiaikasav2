import React, { Component } from 'react';
import {MainTemplate, Info} from 'components'

class Main extends Component {
    render() {
        return (
            <div>
                <MainTemplate
                    info={<Info/>}
                />
            </div>
        );
    }
}

export default Main;