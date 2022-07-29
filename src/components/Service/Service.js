
import React from 'react';

import './Service.css'

import {MdOutlineVilla} from 'react-icons/md'
import {MdOutlineVillaRoom} from 'react-icons/md'
import {MdApartment} from 'react-icons/md'
import {MdBedroomParent} from 'react-icons/md'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {BsShop} from 'react-icons/bs'
import {FaWarehouse} from 'react-icons/fa'
import {GiPositionMarker} from 'react-icons/gi'
import {FcLikePlaceholder} from 'react-icons/fc'
import {AiTwotonePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
import { TiSocialLinkedin } from 'react-icons/ti'
import {TiSocialTwitterCircular}  from 'react-icons/ti'

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


import location1 from '../../assets/location/doul_sale.jpg'

const Service = () => {


    return ( <div>
            <div className='feature' >
                   <h1> Featured Property Types </h1>
                   <p>Fund All Type of Property</p>
                   <div>
                          <div> 
                                 <p> <a href='/services/room' > <MdBedroomParent style={{ color : 'blueviolet' }} /> </a> </p>
                                 <h3> CHAMBRE MODERNE </h3> 
                                 <p>200 Property</p> 
                          </div>

                          <div> 
                               <p> <a href='/services/studio' > <MdBedroomParent style={{ color : 'blueviolet' }} /> </a> </p> 
                               <h3> STUDIO MODERNE </h3> 
                               <p>200 Property</p> 
                          </div>

                          <div> <p> <a href='/services/office'><HiOutlineOfficeBuilding style={{ color : 'blue' }} /> </a> </p> <h3>ESPACE BUREAU </h3> <p>20 Property</p> </div>
                          <div> <p> <a href="/services/shop"> <BsShop style={{ color : 'yellow'}} /> </a> </p> <h3>ESPACE BOUTIQUE </h3> <p>200 Property</p> </div>
                          <div> <p> <a href="/services/warehouse"> <FaWarehouse  style={{ color : 'yellowgreen' }}  /> </a> </p> <h3> ESPACE MAGASIN </h3> <p>200 Property</p> </div>
                          <div> <p> <a href="/services/apartment"> <MdApartment  style={{ color : 'orange' }}  /> </a> </p> <h3>APPARTEMENT </h3> <p>120 Property</p> </div>
                          <div> <p> <a href="/services/villa"> <MdOutlineVilla  style={{ color : 'green' }}  /> </a> </p> <h3>VILLA & DUPLEX </h3> <p>80 Property</p> </div>
                   </div>
            </div>

            <div className='recent_propety' >
                     <p> RECENT PROPERTY LIST </p>
                     <p> Lorem ipsum color sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim at minim vienam </p>
                     <div>
                               <Items image={photo1} prix='400000' liquidation='Bonamoussadi , Douala 5' type_local='APARTMENT' zone='25/11/2021' auteur={'desire poisson'.toUpperCase()} lien_local='sadi/room/25-12-21' />
                               <Items image={photo3} prix='70000' liquidation='Makepe , DOUALA' type_local='STUDIO MODERNE' zone='24/11/2021' auteur={'KENFI COUTEAU'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo2} prix='600000' liquidation='AKWA' type_local='VILLA' zone='25/12/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo4} prix='500000' liquidation='BIYE-MASSI, Yaounde' type_local='VILLA' zone='28/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo5} prix='1250000' liquidation='MEDONG' type_local='CHAMBRE MODERNE' zone='27/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo6} prix='500000' liquidation='BONAPRISO' type_local='CHAMBRE MODERNE' zone='27/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo7} prix='600000' liquidation='BONANJO , DOUALA' type_local='BUREAU, APPARTEMENT' zone='27/11/2021' auteur={'KENFACK LEFIFO'.toUpperCase()} lien_local='bonanjo/office_apartment/25-12-21' />
                               <Items image={photo8} prix='1000000' liquidation='NDOGBONG , Douala ' type_local='VILLA' zone='20/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo9} prix='350000' liquidation='NYALLA CHATEAU, DOUALA' type_local='DUPLEX' zone='20/11/2021' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo10} prix='12500' liquidation='ETOUG-EGE, YAOUNDE' type_local='CHAMBRE MODERNE' zone='Bonamoussadi' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo11} prix='80000' liquidation='NEWTON AEROPORT, DOUALA' type_local='STUDIO MODERNE' zone='Bonamoussadi' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                               <Items image={photo12} prix='800000' liquidation='ETOUG-EBE, YAOUNDE' type_local='VILLA' zone='Bonamoussadi' auteur={'ZENA LAGUERRIERE'.toUpperCase()} lien_local='akwa/villa/25-12-21' />
                     </div>
            </div>   
            
            <div className='our_location' >
                      <p> Explore By Location </p>
                      <div>
                             <ItemLocation img_fond={location1} ville='DOUALA' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='YAOUNDE' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='KRIBI' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='BAFOUSSAM' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='KONGSAMBA' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='BUEA' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='BAMENDA' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='DSCHANG' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='GAROUA' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                             <ItemLocation img_fond={location1} ville='NGAROUNDERE' department='Wourri' tableau={[12, 23,34,45,56,67]} />
                      </div>
            </div>

            <div className='our_agent' >
                  <p> Our Featured Agents </p>
                  <div>
                           <ItemAgent img_agent={location1} habite='MABANDA BONABERI' nom='KENFACK CEDRIC FABRICE' mail='undeuxtrois' telephone='677651234' />
                           <ItemAgent img_agent={location1} habite='MABANDA BONABERI' nom='KENFACK CEDRIC FABRICE' mail='undeuxtrois' telephone='677651234' />
                           <ItemAgent img_agent={location1} habite='MABANDA BONABERI' nom='KENFACK CEDRIC FABRICE' mail='undeuxtrois' telephone='677651234' />
                           <ItemAgent img_agent={location1} habite='MABANDA BONABERI' nom='KENFACK CEDRIC FABRICE' mail='undeuxtrois' telephone='677651234' />
                           <ItemAgent img_agent={location1} habite='MABANDA BONABERI' nom='KENFACK CEDRIC FABRICE' mail='undeuxtrois' telephone='677651234' />
                           <ItemAgent img_agent={location1} habite='MABANDA BONABERI' nom='KENFACK CEDRIC FABRICE' mail='undeuxtrois' telephone='677651234' />
                  </div>
                  <p style={{ textAlign : 'right', marginTop : '-20px', paddingBottom : '.5em', marginRight : '3em' }} > <a href="/agents"> VOIR plus d'Agents</a> </p>
            </div>

        </div>
    );
}

const Items = ({image, prix, liquidation, type_local, zone, lien_local, auteur}) => {
    return ( <div className='item' >
            <img src={image} width='100%' alt="" />
            <div>
                     <p> <span>{liquidation}</span> <span></span> </p>  
                     <p> Publié, le {zone} par {auteur} </p>
                     <p> <span className='money' > {prix} </span> <span> {type_local} </span> </p>
            </div>
            <a href={lien_local} > voir plus </a>
        </div>
    );
}

const ItemLocation = ({img_fond, ville, department, tableau}) => {
    return ( <div className='itemlocated' style={{ background : 'url('+img_fond+')' }} >
              <div>
                 <p> {ville} ,  {department} </p>
                 <table>
                          <tr>
                                 <td> {tableau[0]}  Chambres </td>
                                 <td> {tableau[1]}  Studios </td>
                          </tr>
                         
                          <tr>
                                 <td> {tableau[3]}  Bureau </td> 
                                 <td> {tableau[2]}  Studio </td>
                          </tr>

                          <tr>
                                    <td> {tableau[4]}  Appartements </td>
                                    <td> {tableau[5]}  Villa </td>
                          </tr>
                 </table>
              </div>   
        </div>
    );
}

const ItemAgent = ({img_agent, habite, nom, mail, telephone}) => {
    return ( <div className='item_agent' >
            <img src={img_agent} width='60%' height='100px' alt="" />
            <p> <GiPositionMarker /> {habite} </p>
            <p> {nom} </p>
            <p>        
<TiSocialFacebook style={{fontSize : '2em'}} />
<TiSocialLinkedin style={{fontSize : '2em'}} />
<TiSocialTwitterCircular style={{fontSize : '2em'}} />   
            </p>
            <p> <a href='' > <AiOutlineMail /> </a> <a href='' > <AiTwotonePhone /> </a> </p>
        </div>
    );
}

export default Service;
