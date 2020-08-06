export const CHANGE_BTN = "CHANGE_BTN";

export function changeBtn(btnValue) {
	return { type: CHANGE_BTN, btnValue: btnValue }
}
