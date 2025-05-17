export default function History({entries}) {
    return(
        <div className="history">
            <h2>Latest comparisons</h2>
            <ul>
                {entries.map((item, index) => (
                    <li key={index}>
                        {item.crypto1.name} x {item.crypto2.name} - {item.date}
                    </li>
                ))}
            </ul>
        </div>
    )
}