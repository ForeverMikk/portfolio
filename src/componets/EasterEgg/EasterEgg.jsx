import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './easterEgg.scss';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const EasterEgg = () => {
  const { language } = useLanguage();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState({ X: 0, O: 0, draws: 0 });

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  useEffect(() => {
    if (winner) {
      setScore(prev => ({
        ...prev,
        [winner]: prev[winner] + 1
      }));
    } else if (isDraw) {
      setScore(prev => ({
        ...prev,
        draws: prev.draws + 1
      }));
    }
  }, [winner, isDraw]);

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
    setGameHistory([...gameHistory, newSquares]);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameHistory([]);
  };

  const resetScore = () => {
    setScore({ X: 0, O: 0, draws: 0 });
  };

  const renderSquare = (i) => {
    const isWinningSquare = winner && 
      (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8);
    
    return (
      <button
        className={`easter-egg__square ${squares[i] ? `easter-egg__square--${squares[i].toLowerCase()}` : ''} ${isWinningSquare ? 'easter-egg__square--winning' : ''}`}
        onClick={() => handleClick(i)}
        disabled={!!squares[i] || !!winner}
      >
        {squares[i]}
      </button>
    );
  };

  const getStatus = () => {
    if (winner) {
      return language === 'es' 
        ? `¡Ganador: ${winner}! 🎉` 
        : `Winner: ${winner}! 🎉`;
    }
    if (isDraw) {
      return language === 'es' ? '¡Empate! 🤝' : 'Draw! 🤝';
    }
    return language === 'es' 
      ? `Siguiente jugador: ${isXNext ? 'X' : 'O'}` 
      : `Next player: ${isXNext ? 'X' : 'O'}`;
  };

  return (
    <section id="easter-egg" className="easter-egg section">
      <div className="container">
        <div className="easter-egg__header">
          <h2 className="easter-egg__title">
            {language === 'es' ? '🎮 ¡Easter Egg Encontrado! 🎮' : '🎮 Easter Egg Found! 🎮'}
          </h2>
          <p className="easter-egg__subtitle">
            {language === 'es' 
              ? '¡Felicidades por encontrar esta sección secreta! Disfruta de un juego de Tic-Tac-Toe.' 
              : 'Congratulations on finding this secret section! Enjoy a game of Tic-Tac-Toe.'}
          </p>
        </div>

        <div className="easter-egg__content">
          <div className="easter-egg__game">
            <div className="easter-egg__status">{getStatus()}</div>
            <div className="easter-egg__board">
              <div className="easter-egg__row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </div>
              <div className="easter-egg__row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </div>
              <div className="easter-egg__row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </div>
            </div>
            <div className="easter-egg__actions">
              <button className="btn btn--primary" onClick={resetGame}>
                {language === 'es' ? 'Nuevo Juego' : 'New Game'}
              </button>
              <button className="btn btn--secondary" onClick={resetScore}>
                {language === 'es' ? 'Resetear Puntuación' : 'Reset Score'}
              </button>
            </div>
          </div>

          <div className="easter-egg__score">
            <h3 className="easter-egg__score-title">
              {language === 'es' ? 'Puntuación' : 'Score'}
            </h3>
            <div className="easter-egg__score-grid">
              <div className="easter-egg__score-item">
                <span className="easter-egg__score-label">X</span>
                <span className="easter-egg__score-value">{score.X}</span>
              </div>
              <div className="easter-egg__score-item">
                <span className="easter-egg__score-label">
                  {language === 'es' ? 'Empates' : 'Draws'}
                </span>
                <span className="easter-egg__score-value">{score.draws}</span>
              </div>
              <div className="easter-egg__score-item">
                <span className="easter-egg__score-label">O</span>
                <span className="easter-egg__score-value">{score.O}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

