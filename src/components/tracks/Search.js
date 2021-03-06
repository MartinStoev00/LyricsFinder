import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context'

export default class Search extends Component {
    state = {
        trackTitle: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const link = `http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc`;
        axios.get(`${prefix}${link}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                })
                this.setState({track_title: ''})
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="displa-4 text-center">
                                <i className="fas fa-music"></i> Search For A Song
                            </h1>
                            <p className='lead text-center'>Get the lyrics for any song</p>  
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Song Title..." 
                                        className="form-control form-control-lg" 
                                        name='trackTitle'
                                        value={this.props.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type='submit'>Get Track Lyrics</button>    
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
