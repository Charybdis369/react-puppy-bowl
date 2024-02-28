import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <section>
            <img src='https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/PuppyBowl2022_KA_FN.jpg.rend.hgtvcom.616.616.suffix/1641834657335.jpeg' />
            <h1>Puppy Bowl</h1>
            </section>
            
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/players/add'>Add Players</Link>
            </nav>
        </header>
    )
}
export default Navbar