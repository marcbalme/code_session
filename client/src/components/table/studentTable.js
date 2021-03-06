import React from 'react';
import formatDate from '../../utils/formatDate';
import licenceTypeName from '../../utils/licenceTypeName';

const StudentTable = ({ datas }) => {
  return (
    <table className="hide-for-small">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Date de naissance</th>
          <th>Permis</th>
          <th>5 derniers resultats</th>
          <th>nb de sessions</th>
        </tr>
      </thead>
      <tbody>
        {datas &&
          datas.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.firstName}</td>
              <td>{formatDate(data.birthDate)}</td>
              <td>{licenceTypeName(data.licenceType)}</td>
              <td>5</td>
              <td>{data.sessionDones.length}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
