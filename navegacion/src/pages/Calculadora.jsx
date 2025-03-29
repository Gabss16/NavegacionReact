import React, { useState } from 'react';
import '../components/calculadora.css';

const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleOperacion = (operacion) => {
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        if (isNaN(numero1) || isNaN(numero2)) {
            setResultado('Ingrese números válidos');
            return;
        }

        let res;
        switch (operacion) {
            case 'sumar':
                res = numero1 + numero2;
                break;
            case 'restar':
                res = numero1 - numero2;
                break;
            case 'multiplicar':
                res = numero1 * numero2;
                break;
            case 'dividir':
                res = numero2 !== 0 ? numero1 / numero2 : 'No se puede dividir por cero';
                break;
            default:
                res = null;
        }
        setResultado(res);
    };

    const handleLimpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div>
                <button onClick={() => handleOperacion('sumar')}>Sumar</button>
                <button onClick={() => handleOperacion('restar')}>Restar</button>
                <button onClick={() => handleOperacion('multiplicar')}>Multiplicar</button>
                <button onClick={() => handleOperacion('dividir')}>Dividir</button>
                <button onClick={handleLimpiar}>Limpiar</button>
            </div>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
};

export default Calculadora;