import React, {useRef} from 'react';
import logo from '../logo.svg';
import service from './../services';
import {useSelector, useDispatch} from 'react-redux';
import {querySearchAction, updateCategoriesAction} from './../actions';

export default function Header(props) {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryR);
    const keywordRef = useRef();
    let keyword = '';

    const styles = {
        headerContainer:{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gridColumnGap: '5px'
        },
        searchContainer:{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            gridColumnGap: '5px'
        }
    }

    function onValueChange() {
        keyword = keywordRef.current.value;
        console.log('Keyword is', keyword);
        if(keyword === '') return
    }

    async function executeSearch(e) {
        e.preventDefault();
        console.log('Query is', keyword);
        let articles = await service.getKeywordNews(keyword);
        dispatch(querySearchAction(articles ? articles : []));
        keywordRef.current.value = '';

        let newCategories = categories.map(item => {
            item.selected = false;
            return item;
        });
        dispatch(updateCategoriesAction(newCategories));
    }

    function toggleHam() {
        console.log('Ham value is', props.showHamburger);
        props.toggle(!props.showHamburger);
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-dark bg-dark" style={styles.headerContainer}>
                <div className="hamburger">
                            <i className="fas fa-bars fa-2x" onClick={toggleHam}></i>
                </div > 
                <div className="navbar-brand" >
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    G-News
                </div>
                <form className="form-inline"  style={styles.searchContainer}>
                    <input className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        ref={keywordRef}
                        onChange={onValueChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                        onClick={executeSearch}>Search</button>
                </form>
            </nav>
        </>
    )
}
