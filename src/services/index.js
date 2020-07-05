import Axios from 'axios';
// 9a6674bf15bab6a11b3752f09986d972
// 9583d0b81a2dec03f895b4a5d6b7d439
const API_KEY = '9a6674bf15bab6a11b3752f09986d972';

const NewsService = {
        getTopHeadlines: function() {
                return Axios.get(`https://gnews.io/api/v3/top-news?token=${API_KEY}&country=in`)
                    .then(res =>{
                        console.log('All Indian new headlines are ', res.data);
                        return res.data.articles;
                });
         },
    
        getCategoryNews: function(selectedCategory) {
            return Axios.get(`https://gnews.io/api/v3/topics/${selectedCategory}?token=${API_KEY}&country=in`)
                .then(res =>{
                    console.log('Queried news are ', res.data);
                    return res.data.articles;
                })
        },

        getKeywordNews: function(query) {
            return Axios.get(`https://gnews.io/api/v3/search?q=${query}&token=${API_KEY}&country=in`)
                .then(res =>{
                    console.log('Queried news are ', res.data);
                    return res.data.articles;
                })
        }
};

export default NewsService;