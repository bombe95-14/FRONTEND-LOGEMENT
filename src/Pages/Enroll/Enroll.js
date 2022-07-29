
import React from 'react';

import './Enroll.css'

const Enroll = () => {

    const traitementFormulaire =()=>{
        console.log('je viens de cliquer');
    } 

    return (<>
               <form method='PPOST' action='' onSubmit={traitementFormulaire} enctype='multipart/form-data' >
                         <table>
                               <tr key="1"> 
                                          <td> <label>NOM  : </label> </td>  <td> <input type="text" name='nom' required /> </td>
                               </tr>

                               <tr key="2"> 
                                          <td> <label>ADRESSE EMAIL  : </label> </td>  <td><input type="mail" name='email' required /></td>
                               </tr>

                               <tr key="3"> 
                                          <td> <label>NUMERO DE TELEPHONE  : </label> </td>  <td><input type="tel" name='phone1' required /></td>
                               </tr>

                               <tr key="4"> 
                                          <td> <label>NUMERO DE TELEPHONE (2)  : </label> </td>  <td><input type="tel" name='phone2' required /></td>
                               </tr>

                               <tr key="10"> 
                                             <td> <label>MOT DE PASSE  : </label> </td>  <td><input type="password" name='pwd' required /></td>
                               </tr>

                               <tr key="11"> 
                                             <td> <label>CONFIRMER VOTRE MOT DE PASSE : </label> </td>  <td><input type="password" name='pwd2' required /></td>
                               </tr>

                               <tr key="5"> 
                                          <td> <label>PHOTO DE PROFIL  : </label> </td>  <td><input type="file" name='img_profil' required /></td>
                               </tr>

                               <tr key="6"> 
                                          <td>NUMERO WHATSAPP  : </td>  <td><input type="tel" name='what_number' /></td>
                               </tr>

                               <tr key="7"> 
                                          <td> <label>ADRESSE D'HABITATION  : </label> </td>  <td><input type="text" name='adresse' required /></td>
                               </tr>

                               <tr key="8"> 
                                          <td> <label>PHOTOCOPIE DE LA CNI  : </label> </td>  <td><input type="file" name='cni' required multiple /></td>
                               </tr>

                               <tr key="9">
                                          <td><button type='reset' > REPRENDRE </button></td>  <td><button type='button' >ENVOYER</button></td>
                               </tr>
                         </table>
               </form>
        </>
    );
}

export default Enroll;
