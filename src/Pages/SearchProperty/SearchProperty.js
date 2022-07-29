import React from 'react'

import {useParams} from 'react-router-dom'

import './SearchProperty.css'

import photo1 from '../../assets/recent/heberge5.PNG'
import photo10 from '../../assets/recent/heberge10.PNG'
import photo14 from '../../assets/recent/heberge14.PNG'
import photo2 from '../../assets/recent/heberge6.jpg'
import photo3 from '../../assets/recent/heberge7.jpg'
import photo4 from '../../assets/recent/heberge8.jpg'
import photo5 from '../../assets/recent/heberge9.jpg'
import photo6 from '../../assets/recent/heberge11.jpg'
import photo7 from '../../assets/recent/heberge12.jpg'
import photo8 from '../../assets/recent/heberge13.jpg'
import photo9 from '../../assets/recent/heberge15.jpg'
import photo11 from '../../assets/recent/heberge16.jpg'
import photo12 from '../../assets/recent/heberge17.jpg'
import photo13 from '../../assets/recent/heberge18.jpg'

export default function SearchProperty() {
 
    const {lieu} = useParams()
    const {typelocal} = useParams()
    const {prix} = useParams()    
    const tableau =['CHAMBRE MODERNE','STUDIO MODERNE','APPARTEMENT','MAGASIN','BUREAU','BOUTIQUE','VILLA'] 

    const [ville, setVille] = React.useState(lieu); 
    const [price, setPrice] = React.useState(prix); 
    const [nomLocal, setNomLocal] = React.useState(tableau[parseInt(typelocal)] ); 

  
    return (   <>
        <div id='father' >
                  <form className='searched' >
                             <table>
                                         <tr key="1">
                                                   <td> <label htmlFor='ville' > NOM DU LIEU : </label> </td> 
                                                   <td><input type="text" id='ville' value={ville} onChange={ (e)=>setVille(e.target.value) } /></td>    
                                         </tr>

                                         <tr key="2">
                                                      <td> <label htmlFor='local' >TYPE DE LOCAL : </label> </td> 
                                                      <td><input type="text" id='local' value={nomLocal} onChange={ (e)=>setNomLocal(e.target.value) } /></td>
                                         </tr>

                                         <tr key="3">
                                                      <td> <label htmlFor='price' > LOYER MENSUEL : </label> </td> 
                                                      <td><input type="text" id='price' value={price} onChange={ (e)=>setPrice(e.target.value) } /></td>
                                         </tr>

                                         <tr key="4"> <td colspan="2" > <a href={ "/search/"+ville + "/"+ typelocal + '/'+price  } > Filtrer </a> </td> </tr>
                             </table>
                  </form>

                   <div id='first' >
                                   <Items image={photo1} prix='400000' liquidation={lieu} type_local={ tableau[parseInt(typelocal)] } zone='25/11/2021' auteur={'desire poisson'.toUpperCase()} lien_local='/see/sadi/room/25-12-21/agent' />
                                   <Items image={photo3} prix='70000' liquidation='Makepe , DOUALA' type_local={ tableau[parseInt(typelocal)] } zone='24/11/2021' auteur={'KENFI COUTEAU'.toUpperCase()} lien_local='/akwa/villa/25-12-21' />
                                  <Items image={photo2} prix='600000' liquidation={lieu} type_local={ tableau[parseInt(typelocal)] } zone='25/12/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='/akwa/villa/25-12-21' />
                                  <Items image={photo4} prix='500000' liquidation={lieu} type_local={ tableau[parseInt(typelocal)] } zone='28/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='/akwa/villa/25-12-21' />
                                  <Items image={photo5} prix='1250000' liquidation='MEDONG' type_local={ tableau[parseInt(typelocal)] } zone='27/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='/akwa/villa/25-12-21' />
                                  <Items image={photo6} prix='500000' liquidation='BONAPRISO' type_local={ tableau[parseInt(typelocal)] } zone='27/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='/akwa/villa/25-12-21' />
                                  <Items image={photo7} prix='600000' liquidation={lieu} type_local={ tableau[parseInt(typelocal)] }  zone='27/11/2021' auteur={'KENFACK LEFIFO'.toUpperCase()} lien_local='/see/bonanjo/office_apartment/25-12-21' />
                                  <Items image={photo8} prix='1000000' liquidation={lieu} type_local={ tableau[parseInt(typelocal)] } zone='20/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='/akwa/villa/25-12-21' />
                                        
                   </div>
        </div>

        <div id='last' >
                      <a href="#previous">PRECEDENT</a> <a href="#next">SUIVANT</a>
        </div> 
        </> )
}


const Items = ({image, prix, liquidation, type_local, zone, lien_local, auteur}) => {
    return ( <div className='item' >
            <img src={image} width='100%' alt="" />
            <div>
                     <p> {liquidation.toUpperCase()} </p>  
                     <p> Publié, le {zone} par {auteur} </p>
                     <p> <span className='money' > {prix} </span> <span> {type_local} </span> </p>
            </div>
            <a href={lien_local} > voir plus </a>
        </div>
    );
}

