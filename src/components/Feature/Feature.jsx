import React from 'react'
import FeatureBox from '../FeatureBox/FeatureBox'
import fimage1 from '../../data/images/1.svg'
import fimage2 from '../../data/images/2.svg'
import fimage3 from '../../data/images/3.svg'
import fimage4 from '../../data/images/4.svg'

const Feature = ()  => {
  return (
    <div id='features'>
    <h1> LO QUE OFRECEMOS </h1> 
    <div className='a-container'>
      <FeatureBox image={fimage1} title={'PLAN NUTRICIONAL'} descricao={'Nutri Christian'}/>
      <FeatureBox image={fimage2} title={'E.FUNCIONAL'} descricao={'PFS Junior, Cezar, Mendoza'}/>
      <FeatureBox image={fimage3} title={'E.PERSONALIZADO'} descricao={'PFS Junior, cezar'}/>
      <FeatureBox image={fimage4} title={'CULTURISMO'} descricao={'PFS Junior, cezar'} />
    </div>
    
    </div>
  )
}
export default Feature
