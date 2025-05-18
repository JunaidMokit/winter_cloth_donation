import React, { useEffect, useState } from 'react'
import Campaign from './Campaign';

function Campaigns() {
    const [campaigns,setCampaigns]=useState([]);

    useEffect(()=>{
        fetch('/winter.json')
        .then(res=>res.json())
        .then(data=>setCampaigns(data))
    },[])

  return (
    <div>
       
         <div className='grid grid-cols-4 gap-2.5 max-w-7xl m-auto mt-4'>
            {
            campaigns.map(campaign=><Campaign campaign={campaign}></Campaign>)
           }
      

         </div>
        
    </div>
  )
}

export default Campaigns
