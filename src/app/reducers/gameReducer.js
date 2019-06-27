import initialState from '../store/initialState';

const {game: initialGameState} = initialState;

export default function gameReducer(state = initialGameState, action) {
	switch (action.type) {
		default:
      return state;
	}
}