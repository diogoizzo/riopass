import React from 'react';
import FormPageHeader from '../../../../components/parts/FromPageHeader';
import Menu from '../../../../components/parts/Menu';
import TourForm from '../../../../components/sections/TourForm';

export default function Index() {
   return (
      <Menu>
         <FormPageHeader
            title={'Incluir Novo Tour'}
            subtitle="Preencha as informações do novo tour"
         />
         <TourForm />
      </Menu>
   );
}

Index.auth = true;
