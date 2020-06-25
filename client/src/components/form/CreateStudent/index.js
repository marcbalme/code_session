import React, { useState } from 'react';
import { student } from '../../../translations';
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
} from '../../../constants';
import InputDatePicker from '../inputDatePicker';

const CreateStudent = ({ title, children }) => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [inscriptionDate, setInscriptionDate] = useState(new Date());
  const [licenceType, setLicenceType] = useState(null);
  const selectOptions = [
    { value: VALUE_LICENCE_B, label: LICENCE_B },
    { value: VALUE_LICENCE_AAC, label: LICENCE_AAC },
    { value: VALUE_LICENCE_CS, label: LICENCE_CS },
  ];

  const handleSubmit = () => {
    const value = {
      name: name,
      firstName: firstName,
      licenceType: licenceType,
      birthDate: birthDate,
      inscriptionDate: inscriptionDate,
    };
    return api_newStudent(value);
  };
  return (
    <>
      <form>
        <div className="column small-12">
          <Input
            label={student.name}
            id="studentName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="hdzhud"
          />
        </div>
        <div className="column small-12">
          <Input
            label={student.firstName}
            id="studentFirstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="ets"
          />
        </div>
        <div className="column small-12">
          <InputSelect
            options={selectOptions}
            label={student.licenceType}
            value={licenceType}
            setValue={setLicenceType}
          />
        </div>
        <div className="column small-6">
          <InputDatePicker
            date={birthDate}
            setDate={setBirthDate}
            label={student.birthDate}
          />
        </div>
        <div className="column small-6">
          <InputDatePicker
            date={inscriptionDate}
            setDate={setInscriptionDate}
            label={student.inscriptionDate}
          />
        </div>
        <div className="column small-6">
          <Button type="submit" onClick={() => handleSubmit()} label="submit" />
        </div>
      </form>
    </>
  );
};

export default CreateStudent;
