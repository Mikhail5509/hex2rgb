import React from "react";
import ColorConverter from "./ColorConverter";

const App = () => {
  return (
    <div>
      <h1>Конвертер цвета из HEX в RGB</h1>
      <ColorConverter /> {/* Используем компонент */}
    </div>
  );
};

export default App;
