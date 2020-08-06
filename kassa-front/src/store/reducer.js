import { CHANGE_BTN } from "./actions.js";

const initialState = {
  btnValue: ""
}

export default function reducer(previousState=initialState, action) {
	switch (action.type) {
		case CHANGE_BTN:
			return Object.assign({}, previousState, {
				btnValue: action.btnValue,
			});
		default:
			return previousState;
	}
}