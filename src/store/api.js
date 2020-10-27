import superagent from 'superagent';
const api = 'https://ash-todolist.herokuapp.com';

export const getCategories = function (){
    return (dispatch) => {
        return superagent.get(`${api}/categories`).then((response)=> {
            dispatch(getCatAction({results: response.body}));
        });
    };
};

export const getProductsData = function (){
    return (dispatch) => {
        return superagent.get(`${api}/products`).then((response) =>{
            dispatch(getAction({results: response.body}));
        });
    };
};

export const getCatAction = (payload) =>{
    return{
        type: 'GETCAT',
        payload: payload,
    };
};

export const getAction = (payload) =>{
    return{
        type: 'GET',
        payload: payload,
    }; 
};