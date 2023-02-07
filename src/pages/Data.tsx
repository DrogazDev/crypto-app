export const getStaticProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur');
    const data = await res.json();

    return {
        props: { traders: data }
    }
}

const Data = ({traders}) => {
    return (
        <div>
            <h1>Prices</h1>
            {traders.map(trader => (
                <div key={trader.id}>
                    <h3>{trader.name}</h3>
                    <p>€{trader.current_price}</p>
                    <img src={trader.image} alt="" height={20} />
                    
                </div>
            ))}
        </div>
    )
}

export default Data;