import React from 'react';

import {useParams} from 'react-router-dom'

import photo9 from '../../assets/recent/heberge15.jpg'
import photo11 from '../../assets/recent/heberge16.jpg'
import photo12 from '../../assets/recent/heberge17.jpg'
import photo13 from '../../assets/recent/heberge18.jpg'
import photo10 from '../../assets/recent/heberge10.PNG'
import photo14 from '../../assets/recent/heberge14.PNG'

import './DetailsLocals.css'

const DetailsLocals = () => {

          const { ville, typeLocal, ddatePublicat, nomAgent } = useParams()  

          const clickBouton = (e)=>{
                  console.log('bonjour');
                  if (e.target.id==='reserve') {
                            document.querySelector('.portal').style.display='block'
                            document.querySelector('.portal').addEventListener('click', (e)=>e.target.style.display='none')
                            document.querySelector('.portal>div').addEventListener('click', (e)=>e.stopPropagation())
                  } else if (e.target.id==='quitter') {
                              document.querySelector('.portal').style.display='none'
                              e.preventDefault()
                  } else if(e.target.id==='valider_reservation') {
                              e.preventDefault()     
                  }
        }

    return ( <>
        <div className='details' >
              <p> QUELQUES PRISES DE VUE DU LOCAL SELECTIONNéS </p>
                   <p>
                         <img src={photo9} alt="" width='100%' height='300px' />
                         <img src={photo9} alt="" width='100%' height='300px' />
                         <img src={photo9} alt="" width='100%' height='300px' />
                         <img src={photo9} alt="" width='100%' height='300px' />
                         <img src={photo9} alt="" width='100%' height='300px' /> 
                   </p>   
              <div>
                         <div>   
                                 <h2> DESCRIPTION DU LOCAL : </h2>         
                                  <p><button type='button' onClick={clickBouton} id='reserve' > RESERVER VOTRE {typeLocal} </button>  <button type='button' id='annule' onClick={clickBouton} disabled > ANNULER LA RESERVATION </button> </p>  <hr/>
                         </div>
                         <p>
                               fjkkjdkjmld dnlkdksllkmdklkhn nklnklnknkddslkdkùflljkj kkdjkjkldk kklkldùqkk k knkjnjfjnjk kjn jj kfjkmlq     
                         </p>
              </div>

        </div>

        <div className='portal' style={{ display : 'none' }} >
                <div>
                           <h3> VEUILLEZ ENTRER LES INNFORMATIONS QUI SERONT UTILES POUR VOUS CONTACTEZ : </h3>
                            
                           <form>  
                                     <table>
                                     <tr key="1"> 
                                     <td> <label>NOM ET PRENOM : </label> </td>  <td> <input type="text" name='nom' required /> </td>
                          </tr>

                          <tr key="2"> 
                                     <td> <label>ADRESSE EMAIL  : </label> </td>  <td><input type="mail" name='email' required /></td>
                          </tr>

                          <tr key="3"> 
                                     <td> <label>NUMERO DE TELEPHONE  : </label> </td>  <td><input type="tel" name='phone1' required /></td>
                          </tr>

                          <tr key="4"> 
                                     <td> <label>NUMERO DE TELEPHONE (WHATSAPP)  : </label> </td>  <td><input type="tel" name='phone2' required /></td>
                          </tr>

                          <tr key="6"> <td> <input type="hidden" name='idpourlocal' value={ddatePublicat + '_' + nomAgent + '_'} /> </td> </tr>

                          <tr key="5">
                                     <button id='valider_reservation' onClick={clickBouton}  > ENREGISTRER </button> <button id='quitter' onClick={clickBouton} >ANNULER</button>
                          </tr>

                                     </table>
                           </form>
                </div>
        </div>  

        </>
    );
}

export default DetailsLocals;

