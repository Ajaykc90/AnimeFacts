import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animeFacts } from '../utils/animeApi';
import "./animefacts.css";

const AnimeFacts = () => {
    const { name } = useParams();
    const [facts, setFacts] = useState([]);
    useEffect(() => {
        async function getList() {
            const facts = await animeFacts(name);
            setFacts(facts);
        };
        getList();
    }, [name])

    return (
        <div className="facts">
            <h1 className="factTitle">Facts about {name}</h1>
            <ol>
                {facts.map((data) => {
                    return (
                        <li key={data.fact_id}> {data.fact}</li>
                    )

                })}
            </ol>

        </div>
    )
}

export default AnimeFacts;
