import React from 'react';
import CollectionCard from './CollectionCard';
import './punkList.css'



const PunkList = ({punkListData, setSelectedPunk}) => {
  return (
  <div className='punkList'>
      {punkListData.map(punk => (
          <div onClick={() => setSelectedPunk(punk.token_id)}>
              <CollectionCard
                key={punk.token_id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={
                    "https://ipfs.thirdweb.com/ipfs/"+(punk.image_original_url).substring(7)}
                />
          </div>
      ))}
  </div>);
};

export default PunkList;
