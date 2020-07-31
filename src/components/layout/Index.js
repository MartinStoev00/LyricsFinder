import React, { Component } from 'react'
import Tracks from '../tracks/Tracks'
import Search from '../tracks/Search'

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Search />
                <Tracks />
            </React.Fragment>
        )
    }
}
