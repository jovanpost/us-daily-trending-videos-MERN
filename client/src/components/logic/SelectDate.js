import React, { Component } from 'react';
import GetTrendingVideos from "./GetTrendingVideos";
const moment = require('moment-timezone');

export default class SelectCountry extends Component {
    constructor(props) {
        super(props);
        let d = moment.tz("America/New_York");
        let today = d.format('YYYY-MM-DD');

        this.state = { value: today };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {

        let today = this.state.value;        

        return (
            <main>
                <div id="inputDate">
                    <p>Get the top 10 trending YouTube videos in the United States for the date you choose - starting September 10th 2019.</p>
                    <form>
                        <input onChange={this.handleChange} value={this.state.value} id="datePicker" type="date" name="selectdate" min="2019-09-10" max={today}/>
                    </form>
                </div>
                <GetTrendingVideos getDate={this.state.value} />
            </main>
        );
    }
}  