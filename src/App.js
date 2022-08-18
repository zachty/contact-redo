import React from 'react';
import Contact from './components/contanct';

function App() {
    let contacts = [
        {
            name: 'Cory',
            id: 1,
            adr: 'something',
        },
        {
            name: 'Zach',
            id: 2,
            adr: 'something else',
        },
        {
            name: 'Sarah',
            id: 3,
            adr: 'something new',
        },
    ];

    const [list, setList] = React.useState(contacts);
    const [input, setInput] = React.useState('');

    const submit = () => {
        let newList = list;
        const newObj = {
            name: input,
            id: list.length + 1,
            adr: 'Somewhere Somewhere Somewhere Laneeeee',
        };
        newList.push(newObj);
        setList(newList);
        setInput('');
    };

    const handleChange = event => {
        setInput(event.target.value);
    };

    return (
        <div className="App">
            {list.map(item => (
                <Contact key={item.id} data={item} />
            ))}
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default App;
