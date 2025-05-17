import { useState, useEffect } from 'react';
import CryptoSelector from './components/CryptoSelector';
import PriceDisplay from './components/PriceDisplay';
import History from './components/History';
import { getPrice } from './utils/api';
import "./styles.css";

export default function App() {
  const [crypto1, setCrypto1] = useState([null]);
  const [crypto2, setCrypto2] = useState([null]);
  const [price1, setPrice1] = useState([null]);
  const [price2, setPrice2] = useState([null]);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('history')) || []);

  useEffect(() => {
    if (!crypto1?.id || !crypto2?.id) return;

    async function fetchPrice() {
      try {
        const p1 = await getPrice(crypto1.id);
        const p2 = await getPrice(crypto2.id);
        setPrice1(p1);
        setPrice2(p2);

        const entry = { crypto1, crypto2, date: new Date().toLocaleString() };
        setHistory(prev => {
          const newHistory = [entry, ...prev].slice(0, 5);
          localStorage.setItem('history', JSON.stringify(newHistory));
          return newHistory;
        });
      } catch (error) {
        console.error("Erro ao buscar preços:", error.message);
      }
    }

    fetchPrice();
  }, [crypto1, crypto2]);

  function formatUSD(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  return (
    <div className="container">
      <h1>Crypto Price Tracker</h1>
      <div className="selectors">
        <CryptoSelector label="Crypto 1" onSelect={setCrypto1} />
        <CryptoSelector label="Crypto 2" onSelect={setCrypto2} />
      </div>
      {crypto1 && crypto2 && (
        <PriceDisplay crypto1={crypto1} crypto2={crypto2} price1={formatUSD(price1)} price2={formatUSD(price2)} />
      )}
      <History entries={history} />

    </div>
  )
}