import React, { Component } from 'react';
import {Header, MainTemplate, Info} from 'components'
import {toast} from 'react-toastify'

class Main extends Component {
    componentDidMount() {
        toast.success('react-toastify')
    }
    
    render() {
        return (
            <div>
                <Header/>
                {/* todo robots.txt */}
                <MainTemplate
                    info={<Info/>}
                />
            </div>
        );
    }
}

export default Main;