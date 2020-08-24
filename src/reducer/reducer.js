const initialState = {
    categoryData : [],
    tagData : []
};

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'FETCH_CATEGORY':{
            return{
                ...state,
                categoryData : action.payload,
            }
        }  
        case 'FETCH_TAG':{
            return{
                ...state,
                tagData : action.payload,
            }
        }  
        default:
            return state;
    }
}

export default rootReducer
