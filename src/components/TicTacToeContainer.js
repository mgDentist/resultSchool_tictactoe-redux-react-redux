import TicTacToeLayouts from './TicTacToeLayouts';
import { useSelector, useDispatch } from 'react-redux';
import { updateButtonText, toggleXRound, setWinner, resetGame } from '../actions/gameAction';

function TicTacToeContainer() {
    const dispatch = useDispatch();
    const { buttonText, xRound, winner } = useSelector((state) => state.game);

    const onClickCell = (index) => {
        const newText = [...buttonText];
        if (newText[index] === "" && winner === null) {
            newText[index] = xRound ? "X" : "O";
            dispatch(updateButtonText(newText));
            whoIsWinner(newText);
            dispatch(toggleXRound());
        }
    }

    const onNewGame = () => {
        dispatch(resetGame());
    }

    const whoIsWinner = (newText) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                newText[a] &&
                newText[a] === newText[b] &&
                newText[a] === newText[c]
            ) {
                dispatch(setWinner(`Победил ${newText[a]}`));
                return;
            }
        }

        if (!newText.includes("") && winner === null) {
            dispatch(setWinner("Ничья"));
        }
    }

    return (
        <TicTacToeLayouts
            buttonText={buttonText}
            xRound={xRound}
            winner={winner}
            onClickCell={onClickCell}
            onNewGame={onNewGame}
        />
    );
}

export default TicTacToeContainer;
