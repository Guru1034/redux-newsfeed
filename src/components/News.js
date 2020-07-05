import React from 'react';
import {useEffect} from 'react';
import NewsItem from './NewsItem';
import '../App.css';

import {useSelector} from 'react-redux';


export default function NewsFeeds(props) {

    let newsItems = useSelector(state => state.newsListR);
    console.log('NewsIts are ', newsItems);

    useEffect( ()=>{
        window.scrollTo(0, 0)
    },[newsItems]);  

    return (
        <div className="news-container">
            {newsItems.map( (item,index) => {
                return(
                    <React.Fragment key={index}>
                        <NewsItem newsItem={item} />
                    </React.Fragment>    
                )
            })}
        </div>
    )
}
