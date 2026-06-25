import { useEffect, useState } from 'react'
import '../App.scss'
import data from '../data/data.json'

export const Cars = () => {
    const [compare, setCompare] = useState(JSON.parse(localStorage.getItem('cars')) || [])

    useEffect(() => {
        localStorage.setItem(
            'cars',
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
            <h2 className='title'>Cars</h2>
            <ul className='list'>
                {data.cars.map((item) => {
                    return (

                        <li key={item.id} className='item'>
                            <h3 className='title3'>{item.model}</h3>
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
                        <li className='item3'>year</li>
                        <li className='item3'>engine</li>
                        <li className='item3'>power</li>
                    </ul>
                )
                }

                {
                    compare.map((item) => {
                        return (
                            <ul className='list3' key={item.id}>
                                <li className='item3'>
                                    <p>{item.model}</p>
                                    <button onClick={() => handleCompare(item)} className='remove__bnt'>{compare.some((el) => el.id === item.id)}</button>
                                </li>
                                <li className='item3'>
                                    <p>{item.brand}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.year}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.engine}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.power}</p>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}