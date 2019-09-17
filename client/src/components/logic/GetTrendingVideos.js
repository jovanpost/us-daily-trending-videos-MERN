import React from "react";
const moment = require('moment-timezone');


export default class GetTrendingVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            trendingVideos: null,
        };
    }

    async componentDidMount() {
        let t = new moment(this.props.getDate)
        let y = t.year()
        let m = t.month() + 1
        if (m <= 9) {
            m = "0" + m
        }
        let d = t.date()
        if (d <= 9) {
            d = "0" + d
        }
        let dateFetch = "" + y + m + d;


        const url = "/videos/" + dateFetch;
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();

        if (data === null) {
            this.setState({
                trendingVideos: null,
                loading: false,
            });

        } else
            this.setState({
                trendingVideos: JSON.parse(data.response),
                loading: false,
            });


        this.handleClick = (e) => {
            e.preventDefault();
            this.componentDidMount()
        };
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="videosBlock">
                    <div id="loading" >loading...</div>
                </div>
            );
        }

        if (!this.state.trendingVideos) {
            return (
                <div id="videosBlock">
                    <div id="noFound">I couldn't get the trending videos. Try with some other date.</div>
                    <button onClick={this.handleClick}>Get the trending videos</button>
                </div>
            );
        }

        let items = this.state.trendingVideos

        return (

            <div id="videosBlock">
                <button onClick={this.handleClick}>Get the trending videos</button>
                {items.map(item => <div id="singleVideo"> <a id="videoImg" href={"https://youtu.be/" + item.id} target="_blank" rel="noopener noreferrer"><img src={item.snippet.thumbnails.high.url} alt="" /></a> <a id="videoTitle" href={"https://youtu.be/" + item.id} target="_blank" rel="noopener noreferrer"><h3>{item.snippet.title}</h3></a> <p id="videoChannelTitle"> - {item.snippet.channelTitle} </p> <p id="videoViews">{item.statistics.viewCount} views - </p> <p id="videoDescription">{item.snippet.description}</p> </div>)}
            </div>
        );
    }
}