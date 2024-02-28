import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {getAllPlayers} from '../API/index'



function AllPlayers() {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate
    const [search, setSearch] = useState('')

useEffect(() => {
    async function updatePlayers() {
        try {
            const players = await getAllPlayers()
            setPlayers(players)

        } catch(err) {
            console.error(err)
        }
    }
    updatePlayers()
}, [])

function searchHandler(event) {
    console.log('event.target.value', event.target.value)
    setSearch(event.target.value)
}

let filteredPlayers = players
if (search !== '') {
    filteredPlayers = players.filter((player) => {
        const lowerCasePlayerName = player.name.toLowerCase()
        const lowerCaseSearch = search.toLowerCase()
        return lowerCasePlayerName.includes(lowerCaseSearch)
    })
}

return <main>
    <input name='search' value={search} onChange={searchHandler} />
    {
    filteredPlayers.map((player) => {
        return <article key={player.id}>
            <h2 onClick={() => navigate(`/players/${player.id}`)}>
                <img src={player.imageUrl} />
                {player.name}
            </h2>
        </article>
    })
} </main>


} 
export default AllPlayers