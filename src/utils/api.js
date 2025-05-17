

export async function getPrice(coinId) {
  const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
  const data = await res.json();

  if (!data[coinId] || !data[coinId].usd) {
    console.error("❌ Preço não encontrado para:", coinId, data);
    throw new Error(`Preço não encontrado para ${coinId}`);
  }

  return data[coinId].usd;
}


export async function searchCryptos(query) {
    const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
    const data = await res.json();
    return data.coins.map((c) => ({
        id: c.id,
        name: c.name,
        symbol: c.symbol,
    }));
}