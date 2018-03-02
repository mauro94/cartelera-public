import React from 'react'
import UpcomingEvents from 'Containers/Upcoming'
import 'Style/main.scss'
import 'Style/grid.scss'

const Home = () => (
    <div className='container'>
        <h1>Próximos Eventos</h1>
        <UpcomingEvents />
    </div>
)

export default Home