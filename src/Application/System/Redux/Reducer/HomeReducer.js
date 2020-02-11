import { Constant, State } from 'combine-action';

export default (state = State.HomeState, action) => {
    switch (action.type) {

        case Constant.HomeConstant.UPDATE_STATE:
            return Object.assign({}, state, action.state);

        default:
            return state;
    }
};