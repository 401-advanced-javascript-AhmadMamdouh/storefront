const initialState = {
    categories: [],
    activeCategory: 'food',
  };
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
    case 'change':
      return { categories: state.categories, activeCategory: payload };
    case 'GETCAT':
      const obj = {categories: state.categories , activeCategory: 'food'};
      console.log('obj<<>>>',obj);
      return obj;
    default:
      return state;
    }
  };
  
  export const changeActiveCategory = category => {
    return {
      type: 'change',
      payload: category,
    };
  };