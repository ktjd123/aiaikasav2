import React, { Component } from 'react';
import {MainTemplate, Info} from 'components'
import {toast} from 'react-toastify'

class Main extends Component {
    componentDidMount() {
        toast.success('react-toastify')
    }
    
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