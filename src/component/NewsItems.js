import React, { Component } from 'react';

export default class NewsItems extends Component {
    render() {
        let { title, description, url, LinkUrl, author, date, source } = this.props;
        return (
            <>
                <div className="container mt-4">
                    <div className="card">
                        <img src={url} alt="not found" className="card-img-top" />
                        <div className='card-body'>
                            <span className='badge rounded-pill bg-danger text-light' style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: '0px', top: '0px' }}>{source}</span>
                            <h5 className="card-title text-success">{title && title.slice(0, 50)}......</h5>
                            <p className='card-text'>{description ? description.slice(0, 100) : "No description"}</p>
                            <p>By: {author ? author : "Anonymous"}</p>
                            <hr />
                            <p>Published At: {date} </p>
                            <a href={LinkUrl} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    </div>
                </div>
            </>
        ); 
    }
}
