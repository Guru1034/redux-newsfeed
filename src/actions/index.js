export const querySearchAction = (articles) => {
    return {
        type: 'QUERY_SEARCH',
        payload: articles
    }
}

export const categorySearchAction = (articles) => {
    return {
        type: 'CATEGORY_SEARCH',
        payload: articles
    }
}

export const headlinesSearchAction = (articles) => {
    return {
        type: 'HEADLINES_SEARCH',
        payload: articles
    }
}

export const updateCategoriesAction = (categories) => {
    return {
        type: 'UPDATE_CATEGORIES',
        payload: categories
    }
}