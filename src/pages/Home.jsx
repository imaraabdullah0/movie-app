import React from 'react';
import Main from '../components/Main.jsx';
import Row from '../components/Row.jsx';
import Requests from '../Requests.js';


const Home = () => {
   
    

  return (
   <>
     <Main />

            <Row rowID='1' title='Up Coming' fetchURL={Requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={Requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={Requests.requestTrending} />
        <Row rowID='4' title='Top Rated' fetchURL={Requests.requestTopRated} />
        <Row rowID='5' title='Horror' fetchURL={Requests.requestHorror} />

   </>
  )
}

export default Home