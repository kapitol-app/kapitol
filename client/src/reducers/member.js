import * as getActions from '../actions/getResults';

const initialState = {}

const memberReducer = (state = initialState, action) => {
  switch (action.type) {

    case getActions.MEMBER_RECEIVED:
    return Object.assign({}, state, {currentMember: action.member})

    case getActions.TEST:
    return Object.assign({}, state, {message: action.message});

    default:
    return state;
  }
};

export default memberReducer;
