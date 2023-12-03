import { Component } from 'react';

class TicTacToeLayouts extends Component {
    renderButtons = () => {
        const { buttonText, onClickCell } = this.props;
        return buttonText.map((text, index) => (
            <button
                className="bg-grey-500 text-white w-[100px] h-[100px] p-2.5 text-[26px] border border-white rounded-[5px] cursor-pointer"
                key={index}
                onClick={() => onClickCell(index)}
            >
                {text}
            </button>
        ));
    }
    render() {
        const { xRound, winner, onNewGame } = this.props
        return (
            <div
                className="text-center"
            >
                <header
                    className="bg-[#282c34] min-h-screen flex flex-col-reverse gap-3.75 items-center justify-center text-xs text-white"
                >
                    <button
                        className="p-2.5 text-2xl"
                        onClick={onNewGame}
                    >
                        Новая игра
                    </button>
                    <p
                        className="min-w-[300px] min-h-[300px] grid grid-cols-3"
                    >
                        {this.renderButtons()}
                    </p>
                    <p
                        className="text-xl mb-4"
                    >
                        {winner ? `${winner}` : `Сейчас ходит: ${xRound ? 'X' : 'O'}`}
                    </p>
                </header>
            </div>
        );
    }
}

export default TicTacToeLayouts;
