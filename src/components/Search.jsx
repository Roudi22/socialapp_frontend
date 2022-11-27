import React, { useState, useEffect} from 'react'
import MasonryLayout from './MasonryLayout'
import { client } from '../client'
import { feedQuery, searchQuery } from '../utils/data'
import Spinner from './Spinner'

const Search = ({ searchterm }) => {
  const [pins, setPins] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if(searchterm) {
      setLoading(true);
      const query = searchQuery(searchterm.toLowerCase());

      client.fetch(query)
      .then((data)=> {
        setPins(data);
        setLoading(false);
      })
    } else {
      client.fetch(feedQuery)
      .then((data)=> {
        setPins(data);
        setLoading(false);
      })
    }
  }, [searchterm])
  

  return (
    <div>
      {loading && <Spinner message="Searching for pins..."/>}
      {pins?.length !== 0 && <MasonryLayout pins={pins}/>}
      {pins?.length === 0 && searchterm !== "" && !loading && (
        <div className='mt-10 text-center text-xl'>No Pins Found</div>
      )}
    </div>
  )
}

export default Search