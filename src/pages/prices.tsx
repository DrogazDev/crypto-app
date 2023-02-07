const styles = require('../styles/Home.module.css');
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] });



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
            <h1 className={`${styles.text_center} ${inter.className}`}>Prices</h1>
            <div className={styles.center}>
            <div className={styles.grid}>
                {traders.map(trader => (
                    <div className={styles.card} key={trader.id}>
                        <h2 className={inter.className}><img src={trader.image} alt="" height={30}/> {trader.name}</h2>
                        <p className={inter.className}>€{trader.current_price}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Data;