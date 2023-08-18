import React from 'react';
import FormPageHeader from '../../../../components/parts/FromPageHeader';
import PatientForm from '../../../../components/sections/PatientForm';
import Menu from '../../../../components/parts/Menu';

export default function Index() {
   return (
      <Menu>
         <FormPageHeader
            title={'Novo Paciente'}
            subtitle="Preencha as informações do novo paciente"
         />
         <PatientForm />
      </Menu>
   );
}

Index.auth = true;
