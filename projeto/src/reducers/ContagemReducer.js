const initialState = {
    contagem: 0
    
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CONTAGEM':
            let newCount = state.contagem + 1;
            return { ...state, contagem:newCount};
        break;
    }

    return state;
}