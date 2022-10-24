import React, { useEffect, useState } from 'react'

const Videos = (props) => {
    const [selected, setSelected] = useState(false);

    const [filterText, setFilterText] = useState("");

    const [filterData, setFilterData] = useState(props.videos);

    /* useEffect(() =>{
        setFilterData(props.videos);
    }); */

    const handleAvailableChange = () => {
        setSelected(!selected);
        console.log('selected : ' + selected);
    }

    const onSearch = (e) => {
        setFilterText(e.target.value);
        console.log("Search : " + filterText);
        let searchText = e.target.value;

        if ( searchText !== "" || searchText !== null){
            setFilterData(props.videos.filter((data)=> {
                return data.title.toLowerCase().includes(searchText.toLowerCase())
            }))
        }
        else{
            setFilterData(props.videos)
        }

        console.log(filterData)
    }

    return (
        <div>
            <h1>Video List</h1>
            <div className='inputDiv'>
                <div className='row'>
                    <input
                        type="text"
                        placeholder='Search...'
                        value={filterText}
                        onChange={(e) => onSearch(e)}
                    />
                </div>

                <div className='row'>
                    <input
                        type="checkbox"
                        placeholder='Show Available Only'
                        checked={selected}
                        onChange={handleAvailableChange}
                    />
                    <label>Available Only</label>
                </div>


            </div>
            <div className='searchResultsDiv'>
                {/* {props.videos.map((video, index) => (
                    showVideosBasedOnFilter(video, index, selected, filterText)
                ))} */}
                {
                    filterData.map((video, index)=>(
                        showVideosBasedOnFilter(video, index, selected)
                    ))
                }

            </div>
        </div>
    )
};

function showVideosBasedOnFilter(video, index, selected) {
    return (
        selected ?
            (video.available ?
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{video.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{video.genre}</h6>
                        <p className="card-text">{video.description}</p>
                    </div>
                </div>
                : <></>)
            : <div className="card" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{video.genre}</h6>
                    <p className="card-text">{video.description}</p>
                </div>
            </div>
    )
}
export default Videos