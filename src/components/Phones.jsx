import { useEffect, useState } from 'react'
import '../App.scss'
import data from '../data/data.json'

export const Phones = () => {
 const [compare, setCompare] = useState(JSON.parse(localStorage.getItem('phones')) || [])

    useEffect(() => {
        localStorage.setItem(
            'phones',
            JSON.stringify(compare)
        )
    }, [compare])

    const handleCompare = (item) => {
        const noRepetition = compare.some((el) => el.id === item.id)

        if (noRepetition) {
            setCompare(
                compare.filter((el) => el.id !== item.id)
            )
        } else if (compare.length < 3) {
            setCompare([...compare, item])
        }
    }
    return (
        <>
            <h2 className='title'>Phones</h2>
            <ul className='list'>
                {data.phones.map((item) => {
                    return (

                        <li key={item.id} className='item'>
                            <h3 className='title3'>{item.name}</h3>
                            <p className='desc'>{item.brand}</p>
                            <button onClick={() => handleCompare(item)} className='btn'>{compare.some((el) => el.id === item.id) ? 'Remove' : 'Compare'}</button>
                        </li>
                    )
                })}
            </ul>

            <div className='inner'>
                {compare.length > 0 && (

                    <ul className='list3'>
                        <li className='item3'>Feature</li>
                        <li className='item3'>brand</li>
                        <li className='item3'>price</li>
                        <li className='item3'>memory</li>
                        <li className='item3'>color</li>
                    </ul>
                )
                }

                {
                    compare.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li className='item3'>
                                    <p>{item.name}</p>
                                    <button onClick={() => handleCompare(item)} className='remove__bnt'>{compare.some((el) => el.id === item.id)}</button>
                                </li>
                                <li className='item3'>
                                    <p>{item.brand}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.price}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.memory}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.color}</p>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}