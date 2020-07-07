import React from 'react';
import '../App.css';
import Moment from 'moment';
import logo from '../logo.svg'

export default function NewsItem(props) {

    const newsItem = props.newsItem;
    const { image, title, description, publishedAt, source, url } = newsItem;

    function gotoNewsArticle() {
        let win = window.open(url, '_blank');
        win.focus();
    }

    return (
            <>
            {image && 
                <div className="flex-item card mb-3" onClick={gotoNewsArticle}>
                    <img className="card-img-top" 
                        src={image ? image : logo} 
                        alt="News Item" 
                        style={{height:'200px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                Published on {Moment( publishedAt).format('MMMM Do YYYY')}
                            </small><br/>
                            <small className="text-muted">{source.name}</small>
                        </p>
                    </div>
                </div>}
            { !image && 
                <div className="flex-item card mb-3" onClick={gotoNewsArticle}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                Published on {Moment( publishedAt).format('MMMM Do YYYY')}
                            </small><br/>
                            <small className="text-muted">{source.name}</small>
                        </p>
                    </div>
                </div>}
             </>
    )
}
