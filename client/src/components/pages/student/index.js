import React from 'react';
import Block from '../../block';
import Button from '../../button';
import { student } from '../../../translations';
import Icon from '../../../utils/Icon';
import { ICON_ADD_USER } from '../../../constants';

const StudentPage = () => {
  return (
    <>
      <div className="row">
        <div className="column small-6 medium-4 large-2 padding0 onRight">
          <Button
            label={student.button.create}
            onClick={() => alert('test')}
            class="margin-bottom secondary"
            icon={ICON_ADD_USER}
          />
        </div>
      </div>
      <Block title="ceci est un titre">
        <div>student</div>
        <Icon icon="save" />
      </Block>
    </>
  );
};

export default StudentPage;
