import React, { useState } from 'react';
import Block from '../../block';
import Button from '../../button';
import { student } from '../../../translations';
import Icon from '../../../utils/Icon';
import { ICON_ADD_USER } from '../../../constants';
import SlidePanel from '../../slidePanel';
import CreateStudent from '../../form/CreateStudent';

const StudentPage = () => {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
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
      <Block title="ceci est un titre">
        <div>student</div>
        <Icon icon="save" />
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
