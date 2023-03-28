import { Link } from 'react-router-dom'


const Stock=({stocks, price, change})=> {
    return (


        <div className='stock-list'>
            <h1>{ price }</h1>
            {stocks.map((stock)=> (
               
                <h2>{ change }</h2>
             
            ))}

            <div className='links'>
            <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    )
}

export default Stock