const newListReducer = ( state = [], action) => {
        switch(action.type){
            case 'CATEGORY_SEARCH' :
                return action.payload
            case 'QUERY_SEARCH' :
                return action.payload   
            case 'HEADLINES_SEARCH' :
                return action.payload  
            default:
                return state   
        }
};

export default newListReducer;
