import {useState} from 'react';
import { searchCryptos } from '../utils/api';

export default function CryptoSelector({ label, onSelect }) {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = async (e) =>{
        const value = e.target.value;
        setInput(value);
        if(value.length > 2){
            const coins = await searchCryptos(value);
            setResults(coins);
        } else{
            setResults([]);
        }
    };

    return(
        <div className="crypto-selector">
            <label>{label}</label>
            <input type="text" value={input} onChange={handleChange}  placeholder='Search for a crypto'/>
            {results.length > 0 && (
                <ul className='dropdown'>
                    {results.map((coin) =>(
                        <li key={coin.id} onClick={() => {
                            onSelect(coin);
                            setInput(coin.name);
                            setResults([]);
                        }}>
                            {coin.name} ({coin.symbol.toUpperCase()})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}