import React, { useState } from "react";

const ColorConverter = () => {
  const [hexColor, setHexColor] = useState<string>("");
  const [rgbColor, setRgbColor] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHexColor(value);

    // Проверка длины ввода
    if (value.length === 7) {
      // Проверяем на валидность HEX
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        setError(null);

        // Конвертируем HEX в RGB
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
      } else {
        setError("Ошибка");
        setRgbColor(null);
      }
    } else {
      setRgbColor(null);
      setError(null);
    }
  };

  return (
    <div
      style={{
        backgroundColor: hexColor,
        minHeight: "100vh",
        color: error ? "red" : "black",
        padding: "20px",
      }}
    >
      <input
        type="text"
        value={hexColor}
        onChange={handleHexChange}
        placeholder="#FFFFFF"
        maxLength={7}
      />
      {rgbColor && !error && <div>Цвет в RGB: {rgbColor}</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ColorConverter;
