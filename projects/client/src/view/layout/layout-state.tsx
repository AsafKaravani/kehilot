import { atom, selector } from 'recoil';

type LayoutState = {
	isMenuOpen?: boolean;
	showProfileMenu?: boolean;
	showMenuButton?: boolean;
};
const state = atom<LayoutState>({
	key: 'baseLayoutState',
	default: {
		isMenuOpen: false,
		showProfileMenu: true,
		showMenuButton: true,
	}
});


export const atom_layoutState = selector({
	key: 'layoutState',
	get: ({get}) => get(state),
	set: ({set, get}, newValue) => set(state, {...get(state), ...newValue}),
});
