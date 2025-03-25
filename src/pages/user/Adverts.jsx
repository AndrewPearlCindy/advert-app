import React, { useEffect } from 'react'
import { apiGetAllAdvert } from '../../services/adverts'

const Adverts = () => {
  const fetchAds =async ()=>{
    try {
    const res = await  apiGetAllAdvert();
    console.log(res);
    } catch (error) {
     console.log(error);
    }finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAds();
  })
  return (
    <div>Adverts</div>
  )
}

export default Adverts