
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';


import {MdOutlineVilla} from 'react-icons/md'
import {MdOutlineVillaRoom} from 'react-icons/md'
import {MdApartment} from 'react-icons/md'
import {MdBedroomParent} from 'react-icons/md'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {BsShop} from 'react-icons/bs'
import {FaWarehouse} from 'react-icons/fa'

import './DiversServices.css'

import photo1 from '../../assets/645589.jpg'

const DiversServices = () => {

    const {type_services} = useParams() 
    const [typePropriete, setTypePropriete] = useState(type_services);
    
    document.getElementById(type_services).style.border='10px solid red'

    return ( <>
        <h2 style={{ color : 'blueviolet', marginTop : '2em', paddingLeft : '4em' }} > SERVICES &gt; {typePropriete.toUpperCase()} </h2>
        <div className='parti_service' >

        <div>
           <div className='parti_1' id='room' > 
               <p  > <a href="/services/room"> <MdBedroomParent style={{ color : 'blueviolet', backgroundColor : 'rgba(254, 254, 6, .3)', padding : '.42em' }} /> </a> </p>
               <h5> CHAMBRE MODERNE </h5> 
               <p>200 Property</p> 
           </div>

           <div className='parti_2' > 
                   <h5> STUDIO MODERNE </h5> 
                   <p>200 Property</p> 
           </div>

           <div className='parti_3' id='office' > <p > <a href="/services/office"> <HiOutlineOfficeBuilding style={{ color : 'blue', backgroundColor : 'rgba(52, 52, 207, .3)', padding : '.42em' }} /> </a> </p> <h5> ESPACE BUREAU </h5> <p>20 Property</p> </div>
           <div className='parti_4' id='shop' >  <p > <a href="/services/shop"> <BsShop style={{ color : 'yellow', backgroundColor : 'rgba(254, 254, 6, .3)', padding : '.42em' }} /></a></p> <h5> ESPACE BOUTIQUE </h5> <p>200 Property</p> </div>
           <div className='parti_5' id='wharehouse' > <p > <a href="/services/wharehouse"> <FaWarehouse style={{ color : 'yellowgreen', backgroundColor : 'rgba(254, 254, 6, .3)', padding : '.42em' }} /></a></p> <h5> ESPACE MAGASIN </h5> <p>200 Property</p> </div>
           <div className='parti_6' id='apartment' >  <p > <a href="/services/apartment"> <MdApartment style={{ color : 'orange', backgroundColor : 'rgba(224, 151, 15, .45)', padding : '.42em' }} /> </a> </p> <h5> APPARTEMENT </h5> <p>120 Property</p> </div>
           <div className='parti_7' id='villa' > <p ><a href="/services/villa"> <MdOutlineVilla style={{ color : 'green', backgroundColor : 'rgba(114, 209, 114, .3)', padding : '.42em' }} /></a></p> <h5> VILLA & DUPLEX </h5> <p>80 Property</p> </div>
        </div>

        <div>
              <div>     
                        <p><span></span></p>
                        <p><span>VILLE</span> <input type="text" name='ville' /> </p>
                        <p> <span>NOMBRE DE CHAMBRE  :  </span> <input type="text" name='nbchamb' /> </p>
                        <p> <span>NOMBRE DE CUISINE :  </span> <input type="text" name='nbcuisine' /> </p>
                        <p> <span>NOMBRE DE DOUCHE  :  </span> <input type="text" name='nbdouche' /> </p>
                        <p> <span>NOMBRE DE SALON  :  </span> <input type="text" name='nbsalon' /> </p>
                        <p> <span>SURPERFICIE  :  </span> <input type="text" name='surface' /> </p>
                        <p> <span>CATEGORIE  :  </span> 
                              <select> 
                                       <option value="NON MEUBLE" key="1">NON MEUBLE</option>
                                       <option value="MEUBLE" key="2">MEUBLE</option>
                              </select> 
                        </p><br/>
                        <a href="">  FILTRER  </a>
              </div>

              <div>
                     <Items image={photo1} prix={12500} liquidation='for sale' type_local='studio moderne' zone='makepe' />
                     <Items image={photo1} prix={12500} liquidation='for sale' type_local='studio moderne' zone='makepe' />
                     <Items image={photo1} prix={12500} liquidation='for sale' type_local='studio moderne' zone='makepe' />
                     <Items image={photo1} prix={12500} liquidation='for sale' type_local='studio moderne' zone='makepe' />
                     <Items image={photo1} prix={12500} liquidation='for sale' type_local='studio moderne' zone='makepe' />
                     <Items image={photo1} prix={12500} liquidation='for sale' type_local='studio moderne' zone='makepe' />
              </div>
        </div>

        </div>
        </>
    );
}

const Items = ({image, prix, liquidation, type_local, zone}) => {
    return ( <div className='item_service' >
            <img src={image} width='100%' alt="" />
            <div>
                     <p> <span>{liquidation}</span> <span></span> </p>  
                     <p> {zone} </p>
                     <p> <span> {prix} </span> <span> {type_local} </span> </p>
            </div>
        </div>
    );
}

export default DiversServices;
