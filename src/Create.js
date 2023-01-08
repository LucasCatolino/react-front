import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [ong, setOng] = useState('mario');
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const pet = { name, age, ong, description };

        setIsPending(true);

        fetch('http://localhost:8000/pets', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pet)
        }).then( () => {
            console.log("New pet added");
            setIsPending(false);
            navigate('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add new pet</h2>
            <form onSubmit={ handleSubmit }>
                <label>Pet name:</label>
                <input
                    type="text"
                    required
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <label>Age:</label>
                <input
                    type="text"
                    required
                    value={ age }
                    onChange={ (e) => setAge(e.target.value) }
                />
                <label>ONG:</label>
                <select
                    value={ ong }
                    onChange={ (e) => setOng(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <label>Description:</label>
                <textarea
                    required
                    value={ description }
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                 { !isPending &&
                    <button>Add pet</button> }
                { isPending &&
                    <button>Adding pet</button> }
            </form>
        </div>
     );
}
 
export default Create;