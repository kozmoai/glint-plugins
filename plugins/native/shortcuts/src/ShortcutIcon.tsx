/*
 * Copyright 2021 The Glint Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

type Props = {
  text: string;
  color: string;
};

const useStyles = makeStyles(theme => ({
  avatar: (props: Props) => ({
    color: theme.palette.getContrastText(props.color),
    backgroundColor: props.color,
    width: 28,
    height: 28,
    fontWeight: 'bold',
    fontSize: 13,
    filter: 'contrast(150%) brightness(1.4)',
  }),
}));

export const ShortcutIcon = (props: Props) => {
  const classes = useStyles(props);

  return <Avatar className={classes.avatar}>{props.text}</Avatar>;
};