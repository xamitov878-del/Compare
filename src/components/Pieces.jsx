import { useEffect, useState } from 'react'
import '../App.scss'
import data from '../data/data.json'

export const Pieces = () => {
    const [compare, setCompare] = useState(JSON.parse(localStorage.getItem('pieces')) || [])

    useEffect(() => {
        localStorage.setItem(
            'pieces',
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
            <h2 className='title'>Pieces</h2>
            <ul className='list'>
                {data.pieces.map((item) => {
                    return (

                        <li key={item.id} className='item'>
                            <h3 className='title3'>{item.country}</h3>
                            <p className='desc'>{item.continent}</p>
                            <button onClick={() => handleCompare(item)} className='btn'>{compare.some((el) => el.id === item.id) ? 'Remove' : 'Compare'}</button>
                        </li>
                    )
                })}
            </ul>

            <div className='inner'>
                {compare.length > 0 && (

                    <ul className='list3'>
                        <li className='item3'>Feature</li>
                        <li className='item3'>continent</li>
                        <li className='item3'>population</li>
                        <li className='item3'>area</li>
                        <li className='item3'>mountain</li>
                    </ul>
                )
                }

                {
                    compare.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li className='item3'>
                                    <p>{item.country}</p>
                                    <button onClick={() => handleCompare(item)} className='remove__bnt'>{compare.some((el) => el.id === item.id)}</button>
                                </li>
                                <li className='item3'>
                                    <p>{item.continent}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.population}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.area}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.mountain}</p>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}