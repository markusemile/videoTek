export default function reducer(state,action){
    switch (action.type)
    {
        case 'SET_SEARCH':
            return {
                ...state,
                searchResult: action.payload
            }
        case 'SET_GENRE':
            return {
                ...state,
                genres: action.payload
            }
        case 'RESET_SEARCH':
            return {
                ...state,
                searchResult: []
            }
        case 'SET_SPINNER':
            return {
                ...state,
                animeSpin:action.payload
            }
        default:
            return state;
    }
}