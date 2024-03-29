import React from 'react';

import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Task from './Task';

export const task = {
  id: 1,
  title: 'Test Task',
  state: 'TASK_INBOX',
};

export const actions = {
  onArchiveTask: () =>  action('onArchiveTask'),
  onPinTask: () => action('onPinTask'),
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions}></Task>)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);