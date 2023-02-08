import React from 'react'
import FeatureBox from '../FeatureBox/FeatureBox'
import fimage1 from '../../data/images/1.svg'
import fimage2 from '../../data/images/2.svg'
import fimage3 from '../../data/images/3.svg'
import fimage4 from '../../data/images/4.svg'
import fimage5 from '../../data/images/5.svg'
import fimage6 from '../../data/images/6.svg'

const Feature = ()  => {
  return (
    <div id='features'>
    <h1> LO QUE OFRECEMOS </h1> 
    <div className='a-container'>
      <FeatureBox image={fimage1} title={'PLAN NUTRICIONAL'} descricao={'Lic Nutri Christian'}/>
      <FeatureBox image={fimage2} title={'E.FUNCIONAL'} descricao={'PFS Manuel Jr, César Arce, Fabio Mendoza'}/>
      <FeatureBox image={fimage3} title={'E.PERSONALIZADO'} descricao={'PFS Manuel Jr, César Arce'}/>
      <FeatureBox image={fimage4} title={'MUSCULACIÓN'} descricao={'PFS Manuel Jr, César Arce'} />
      <FeatureBox image={fimage5} title={'SPINNING'} descricao={'PFS Junior, César Arce'} />
      <FeatureBox image={fimage6} title={'FISIOTERAPIA'} descricao={'Fisioterapia Hashimoto'} />
    </div>
    
    </div>
  )
}
export default Feature
