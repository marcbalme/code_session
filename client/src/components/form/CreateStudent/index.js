import React, { useState } from 'react';
import { student } from '../../../translations';
import Input from '../input';
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
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [inscriptionDate, setInscriptionDate] = useState(new Date());
  const [licenceType, setLicenceType] = useState(null);
  const selectOptions = [
    { value: VALUE_LICENCE_B, label: LICENCE_B },
    { value: VALUE_LICENCE_AAC, label: LICENCE_AAC },
    { value: VALUE_LICENCE_CS, label: LICENCE_CS },
  ];
  console.log(name, firstName, birthDate, phone, inscriptionDate, licenceType);
  return (
    <>
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
        <Input
          label={student.phoneNumber}
          id="studentPhone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0102030405"
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
    </>
  );
};

// Block.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.any,
// };

export default CreateStudent;

// class App extends React.Component {
//   state = {
//     selectedOption: null,
//   };
//   handleChange = selectedOption => {
//     this.setState(
//       { selectedOption },
//       () => console.log(`Option selected:`, this.state.selectedOption)
//     );
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       />
//     );
//   }
// }
