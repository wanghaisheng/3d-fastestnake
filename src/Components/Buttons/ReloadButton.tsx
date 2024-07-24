import { useState } from "react";
import "./ReloadButton.css"; // Подключаем стили
import handleKeyDown from "./handleKeyDown";

const ReloadButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false); // Состояние анимации

  const handleClick = () => {
    setIsAnimating(true); // Запустить анимацию
    setTimeout(() => setIsAnimating(false), 1000); // Остановить анимацию через 1 секунду
  };

  return (
    <button
      className="refresh-button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <i className={`fas fa-refresh ${isAnimating ? "fa-spin" : ""}`}></i>
    </button>
  );
};

export default ReloadButton;
