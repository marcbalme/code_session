import React, { useState } from 'react';
import { common, student } from '../../../translations';
import { api_newStudent } from '../../../api/student/request';
import Input from '../input';
import Button from '../../button';
import InputSelect from '../inputSelect';
import {
  VALUE_LICENCE_B,
  LICENCE_B,
  VALUE_LICENCE_AAC,
  LICENCE_AAC,
  VALUE_LICENCE_CS,
  LICENCE_CS,
  ICON_SAVE,
} from '../../../constants';
import InputDatePicker from '../inputDatePicker';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [inscriptionDate, setInscriptionDate] = useState(new Date());
  const [licenceType, setLicenceType] = useState(null);
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [firstNameIsEmpty, setFirstNameIsEmpty] = useState(false);
  const [licenceTypeIsEmpty, setLicenceTypeIsEmpty] = useState(false);
  const selectOptions = [
    { value: VALUE_LICENCE_B, label: LICENCE_B },
    { value: VALUE_LICENCE_AAC, label: LICENCE_AAC },
    { value: VALUE_LICENCE_CS, label: LICENCE_CS },
  ];

  const testFields = () => {
    if (!name) {
      setNameIsEmpty(true);
    }
    if (!firstName) {
      setFirstNameIsEmpty(true);
    }
    if (!licenceType) {
      setLicenceType(true);
    }
  };

  const handleSubmit = () => {
    if (name && firstName && licenceType) {
      const value = {
        name: name,
        firstName: firstName,
        licenceType: licenceType,
        birthDate: birthDate,
        inscriptionDate: inscriptionDate,
      };
      return api_newStudent(value);
    } else {
      testFields();
    }
  };
  return (
    <>
      <div className="column small-12">
        <Input
          label={student.name}
          id="studentName"
          type="text"
          value={name}
          onChange={(e) => {
            setNameIsEmpty(false);
            setName(e.target.value);
          }}
          placeholder="Snow"
          isEmpty={nameIsEmpty}
        />
      </div>
      <div className="column small-12">
        <Input
          label={student.firstName}
          id="studentFirstName"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstNameIsEmpty(false);
            setFirstName(e.target.value);
          }}
          placeholder="Jon"
          isEmpty={firstNameIsEmpty}
        />
      </div>
      <div className="column small-12">
        <InputSelect
          options={selectOptions}
          label={student.licenceType}
          value={licenceType}
          setValue={setLicenceType}
          isEmpty={licenceTypeIsEmpty}
        />
      </div>
      <div className="column ssmall-12 medium-6">
        <InputDatePicker
          date={birthDate}
          setDate={setBirthDate}
          label={student.birthDate}
        />
      </div>
      <div className="column small-12 medium-6">
        <InputDatePicker
          date={inscriptionDate}
          setDate={setInscriptionDate}
          label={student.inscriptionDate}
        />
      </div>
      <div className="column small-12 medium-6">
        <Button
          onClick={() => handleSubmit()}
          label={common.save}
          icon={ICON_SAVE}
        />
      </div>
    </>
  );
};

export default CreateStudent;
