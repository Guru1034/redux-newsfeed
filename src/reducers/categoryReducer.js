const categoriesReducer = (
    state = [
        {
          name : 'Top',
          selected  : true
        },
        {
          name : 'World',
          selected  : false
        },
        {
          name : 'Nation',
          selected  : false
        },
        {
          name : 'Business',
          selected  : false
        },
        {
          name : 'Technology',
          selected  : false
        },
        {
          name : 'Entertainment',
          selected  : false
        },
        {
          name : 'Sports',
          selected  : false
        },
        {
          name : 'Science',
          selected  : false
        },
        {
          name : 'Health',
          selected  : false
        }
      ], 
    action) => {   
    switch (action.type){
        case 'UPDATE_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
}

export default categoriesReducer