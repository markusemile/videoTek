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
        default:
            return state;
    }
}