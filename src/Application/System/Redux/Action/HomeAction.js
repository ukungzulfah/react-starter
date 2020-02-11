import { Constant } from 'combine-action';

export function updateState(state) {
    return (dispatch) => {
        dispatch({ type: Constant.HomeConstant.UPDATE_STATE, state });
    };
}
