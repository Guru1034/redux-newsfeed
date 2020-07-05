import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {headlinesSearchAction, categorySearchAction, updateCategoriesAction} from './../actions';
import service from './../services';

export default function Sidebar(props) {
    
    const cats = useSelector(state => state.categoryR);
    const dispatch = useDispatch();

    async function selectCategory(e) {
        e.preventDefault();
        console.log('Selected category is ', e.target.innerHTML);
        let selectedCategory = e.target.innerHTML;

        let newCategories = cats.map(item => {
            if(item.name === selectedCategory){
                item.selected = true;
            }else{
                item.selected = false;
            }
            return item;
        })

        // Disatch the Update Categories Action, so that reducer can update the categories
        dispatch(updateCategoriesAction(newCategories));
        console.log('\n\n Updated Categories are ', newCategories);
        toggleHam();  

        if(selectedCategory === 'Top'){
            let articles = await service.getTopHeadlines();
            dispatch(headlinesSearchAction(articles ? articles : []))
            console.log('Headlines from services is ', articles);
        }else{
            let articles = await service.getCategoryNews(selectedCategory.toLowerCase());
            dispatch(categorySearchAction(articles ? articles : []))
            console.log('Headlines from services is ', articles);
        }
      selectedCategory = '';       
    }

    function toggleHam() {
        console.log('Ham value is', props.showHamburger);
        props.toggle(!props.showHamburger);
    }

    return (
        <>
            <aside>
                <ul className="list-group">
                    {cats.map( (category,index) => {
                        return(
                            <li key={index} style={{cursor:'pointer'}}
                                className ={"list-group-item list-group-item-dark " + (category.selected ? 'selectedCategory' : '')}
                                onClick={selectCategory}>
                                {category.name}
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}
