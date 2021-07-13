const initialstate ={
    count: 0
};

function addreducer(state=initialstate, action){

    return {...initialstate, state.count= +1}
}

function minusreducer(state=initialstate, action){

    return {...initialstate, state.count= -1}
}