import axios from 'axios';


export const fetchFixtures = async () => {



    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {live: 'all'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY ,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
        
      }
      
      
      try {
          const response = await axios.request(options);
          console.log('test', response.data);
          return response.data
      } catch (error) {
          console.error(error);
      }


}

export const fetchLeague = async () => {

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {
      league: 'all',
      season: '2022'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log('league', response.data);
    return response.data;
  } catch (error) {
      console.error(error);
  }

}

