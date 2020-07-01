import React, { useState, useEffect } from 'react';
import Block from '../../block';
import Button from '../../button';
import { student } from '../../../translations';
import { ICON_ADD_USER } from '../../../constants';
import SlidePanel from '../../slidePanel';
import CreateStudent from '../../form/CreateStudent';
import { BDD_URL } from '../../../constants';
import axios from 'axios';
import StudentTable from '../../table/studentTable';

const StudentPage = () => {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [students, setStudents] = useState('');
  useEffect(() => {
    async function fetchData() {
      const results = await axios.get(`${BDD_URL}/student`);
      const data = await results.data;
      setStudents(data);
    }
    fetchData();
  }, []);
  console.log(students);
  return (
    <>
      <h1>{student.title}</h1>
      <div className="row">
        <div className="column small-6 medium-4 large-2 padding0 onRight">
          <Button
            label={student.button.create}
            onClick={() => setPanelIsOpen(!panelIsOpen)}
            class="margin-bottom secondary"
            icon={ICON_ADD_USER}
          />
        </div>
      </div>
      <Block title={student.block_title}>
        <StudentTable datas={students} />
      </Block>
      <SlidePanel
        title={student.button.create}
        icon={ICON_ADD_USER}
        isOpen={panelIsOpen}
        setPanelIsOpen={() => setPanelIsOpen(!panelIsOpen)}
      >
        <CreateStudent />
      </SlidePanel>
    </>
  );
};

export default StudentPage;
