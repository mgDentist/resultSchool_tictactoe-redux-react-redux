import { connect } from 'react-redux';
import { Component } from 'react';
import TicTacToeLayouts from './TicTacToeLayouts';
import { updateButtonText, toggleXRound, setWinner, resetGame } from '../actions/gameAction';

class TicTacToeContainer extends Component {

    onClickCell = (index) => {
        const { buttonText, xRound, winner, updateButtonText, toggleXRound } = this.props;
        if (buttonText[index] === "" && winner === null) {
            const newText = [...buttonText];

            newText[index] = xRound ? "X" : "O";
            updateButtonText(newText);
            this.whoIsWinner(newText);
            toggleXRound();
        }
    };

    onNewGame = () => {
        this.props.resetGame();
    };

    whoIsWinner = (newText) => {
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
                this.props.setWinner(`Победил ${newText[a]}`);
                return;
            }
        }

        if (!newText.includes("") && this.props.winner === null) {
            this.props.setWinner("Ничья");
        }
    }

    render() {
        const { buttonText, xRound, winner } = this.props;
        return (
            <TicTacToeLayouts
                buttonText={buttonText}
                xRound={xRound}
                winner={winner}
                onClickCell={this.onClickCell}
                onNewGame={this.onNewGame}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    buttonText: state.game.buttonText,
    xRound: state.game.xRound,
    winner: state.game.winner
});

const mapDispatchToProps = {
    updateButtonText,
    toggleXRound,
    setWinner,
    resetGame
}
export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeContainer);
