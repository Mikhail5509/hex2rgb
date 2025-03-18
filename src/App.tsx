import { useState } from 'react';

const isValidHex = (hex: string) => /^#([0-9A-Fa-f]{6})$/.test(hex);

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

function App() {
  const [hex, setHex] = useState('#');
  const [rgb, setRgb] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHex(value);

    if (value.length === 7) {
      if (isValidHex(value)) {
        const rgbColor = hexToRgb(value);
        setRgb(rgbColor);
        setBgColor(value);
      } else {
        setRgb('Ошибка');
        setBgColor('#ff0000'); // Красный фон при ошибке
      }
    } else {
      setRgb('');
    }
  };

  return (
    <div id="root" style={{ backgroundColor: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="container">
        <input type="text" value={hex} onChange={handleChange} maxLength={7} />
        <div className="output">{rgb}</div>
      </div>
    </div>
  );
}

export default App;
