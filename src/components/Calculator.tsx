import  { useState } from "react";


function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
   
    { label: "/", type: "operator" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },

    { label: "+", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },

    { label: "*", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },

    { label: "-", type: "operator" },
    { label: ".", type: "number" },
    { label: "0", type: "number" },
    { label: "00", type: "number"},

     { label: "C", type: "clear" },
    { label: "=", type: "equal" }
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="calculator-display"
          value={input}
          readOnly
        />
        <div className="calculator-buttons">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={`btn ${btn.type}`}
              onClick={() => {
                if (btn.label === "C") handleClear();
                else if (btn.label === "=") handleCalculate();
                else handleClick(btn.label);
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
