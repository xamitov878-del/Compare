import { useEffect, useState } from 'react'
import '../App.scss'
import data from '../data/data.json'

export const Football = () => {
    const [compare, setCompare] = useState(JSON.parse(localStorage.getItem('football')) || [])

    useEffect(() => {
        localStorage.setItem(
            'football',
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
            <h2 className='title'>Football</h2>
            <ul className='list'>
                {data.football.map((item) => {
                    return (

                        <li key={item.id} className='item'>
                            <h3 className='title3'>{item.stadium}</h3>
                            <p className='desc'>{item.club}</p>
                            <button onClick={() => handleCompare(item)} className='btn'>{compare.some((el) => el.id === item.id) ? 'Remove' : 'Compare'}</button>
                        </li>
                    )
                })}
            </ul>

            <div className='inner'>
                {compare.length > 0 && (

                    <ul className='list3'>
                        <li className='item3'>Feature</li>
                        <li className='item3'>country</li>
                        <li className='item3'>founded</li>
                        <li className='item3'>stadium</li>
                        <li className='item3'>trophies</li>
                    </ul>
                )
                }

                {
                    compare.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li className='item3'>
                                    <p>{item.club}</p>
                                    <button onClick={() => handleCompare(item)} className='remove__bnt'>{compare.some((el) => el.id === item.id)}</button>
                                </li>
                                <li className='item3'>
                                    <p>{item.country}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.founded}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.stadium}</p>
                                </li>
                                <li className='item3'>
                                    <p>{item.trophies}</p>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}