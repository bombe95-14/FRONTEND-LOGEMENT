import React, { useState } from 'react';

import './Feature.css'

import {IoIosSearch} from 'react-icons/io'

const Feature = () => {

    const [ville, setVille] = useState(' ');
    const [localType, setLocalType] = useState(0);
    const [prix, setPrix] = useState(20000);
    console.log(ville + '\n\n' + prix);

    return (
        <div className='head' >
            <p>SEARCH YOUR NEXT HOME </p>
            <p>Find new & featured property located in your local city. </p>

             <form>
                   <p> <label>CITY / STREET </label> <br/> <input type="text"  value={ville} onChange={ (e)=>{ setVille(e.target.value)} } /> </p>

                   <p> <label>PROPERTY TYPE </label> <br/> 
                        <select onChange={ (e)=>setLocalType( e.target.selectedIndex ) } >
                            <option value="CHAMBRE MODERNE" selected key="1">CHAMBRE MODERNE</option>
                            <option value="STUDIO MODERNE" key="2">STUDIO MODERNE</option>
                            <option value="APPARTEMENT" key="3">APPARTEMENT</option>
                            <option value="MAGASIN" key="4">MAGASIN</option>
                            <option value="BUREAU" key="5">BUREAU</option>
                            <option value="BOUTIQUE" key="6">BOUTIQUE</option>
                            <option value="VILLA" key="7">VILLA</option>
                        </select> 
                   </p>

                   <p> <label>PRICE RANGE </label> <br/> <input type="text" value={prix} onChange={ (e)=>setPrix(e.target.value) } /> </p>

                   <p> <a href={ "/search/"+ville + "/"+ localType + '/'+prix  } > <IoIosSearch /> RECHERCHE </a> </p>
             </form>   

    </div>

    );
}

export default Feature;
