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
        case 'FETCH_MORE_CATEGORY':{
            return{
                ...state,
                categoryData : [...state.categoryData,...action.payload]
            }
        }   
        case 'FETCH_MORE_TAG':{
            return{
                ...state,
                tagData : [...state.tagData,...action.payload],
            }
        }  
        default:
            return state;
    }
}

export default rootReducer
