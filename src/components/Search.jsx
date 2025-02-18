import { useState } from 'react';

export default function Search({ initialInput }) {
    const [seachInput, setSearchInput] = useState(initialInput);

    function handleChange(event) {
        setSearchInput(event.target.value);
    }

    return (
        <input className="search-input" value={seachInput} onChange={handleChange}></input>
    );
}