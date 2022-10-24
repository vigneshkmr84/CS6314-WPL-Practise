/* import React, { Component } from 'react';
import Videos from './components/videos';


class App extends Component {

    state = {
        videos: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/videos')
            .then(res => res.json())
            .then((data) => {
                this.setState({ videos: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Videos videos={this.state.videos} />
        )
    }
}

export default App; */

import React, { useEffect, useState } from 'react'
import Videos from './components/videos';

const App = () => {
  const defaultVideos = [];
  const [videos, setVideos] = useState(defaultVideos);

  useEffect(()=>{
    console.log('Fectching videos');
    fetch('videos.json')
    .then(res=> res.json())
    .then((data)=> {
        setVideos(data)
    })
    .catch(console.log)

    console.log(videos)
  }, []);

  return (
    <div className='app'>
        <Videos videos={videos} />
    </div>
  )
}

export default App