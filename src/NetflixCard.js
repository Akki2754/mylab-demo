import React from 'react'

function NetflixCard(props) {
    return (
        <div className="Cards">
            <div className="card">
                <img src={props.img}alt=""></img>
            </div>
            <div>
                <a href={props.link}target="_blank"><button>click here</button></a>
            </div>
        </div>
    )
}

export default NetflixCard
