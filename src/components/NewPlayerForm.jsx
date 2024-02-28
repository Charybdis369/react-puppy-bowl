import {useState} from 'react'
import {addPlayer} from '../API'
import {useNavigate} from 'react-router-dom'

function NewPlayerForm() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [image, setImage] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const playerObject = {
            name: name,
            breed: breed,
            imageUrl: image
        }
        await addPlayer(playerObject);

        navigate('/')
    }

    return <form onSubmit={handleSubmit}>
        <h1>Add Player</h1>
    
    <div>
        <label>Name</label>
        <input name='name' value={breed} onChange={(event) => setName(event.target.value)} />
    </div>
    <div>
        <label>Breed</label>
        <input name='breed' value={breed} onChange={(event) => setBreed(event.target.value)} />
    </div>
    <div>
        <label>Image Url</label>
        <input name='image' value={image} onChange={(event) => setImage(event.target.value)} />
    </div>
    <input type='submit' />
    </form>
}
export default NewPlayerForm