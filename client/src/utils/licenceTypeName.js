import {
  VALUE_LICENCE_B,
  VALUE_LICENCE_AAC,
  VALUE_LICENCE_CS,
  LICENCE_B,
  LICENCE_AAC,
  LICENCE_CS,
} from '../constants';

const licenceTypeName = (licence) => {
  switch (licence) {
    case VALUE_LICENCE_B:
      return LICENCE_B;
    case VALUE_LICENCE_AAC:
      return LICENCE_AAC;
    case VALUE_LICENCE_CS:
      return LICENCE_CS;
    default:
      return licence;
  }
};
export default licenceTypeName;
