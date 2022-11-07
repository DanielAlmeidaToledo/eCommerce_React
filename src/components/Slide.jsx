import { useState, useEffect } from 'react'
import './Slide.css'

function Slide({ teams }){
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(teams)
    }, [])

    if(!data || !data.length) return null;

    return (
        <div className="container">
            <div className="carousel">
                {data.map((item) => {
                    const {logo,id} = item;
                    return (
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={logo} alt="team" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slide