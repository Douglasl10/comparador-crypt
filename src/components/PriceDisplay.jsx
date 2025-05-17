
export default function PriceDisplay({ crypto1, crypto2, price1, price2 }) {
    if (!crypto1 || !crypto2) 
        return <p>Loading prices...</p>;

        const diff = Math.abs(price1 - price2).toFixed(2);

        return(
            <div className="price">
                <p>{crypto1.name}: {price1}</p>
                <p>{crypto2.name}: {price2}</p>
                <p>Difference: {diff}</p>
            </div>
        )
    
}