/*
 * Copyright 2024 The Kozmoai Authors
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

import {
  DEFAULT_NAMESPACE,
  GroupEntity,
  UserEntity,
  stringifyEntityRef,
} from '@kozmoai/catalog-model';
import { catalogApiRef, useEntity } from '@kozmoai/plugin-catalog-react';
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Switch,
  Theme,
  Typography,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react';
import useAsync from 'react-use/lib/useAsync';

import {
  Avatar,
  InfoCard,
  Progress,
  ResponseErrorPanel,
  Link,
  OverflowTooltip,
} from '@kozmoai/core-components';
import { useApi } from '@kozmoai/core-plugin-api';
import {
  getAllDesendantMembersForGroupEntity,
  removeDuplicateEntitiesFrom,
} from '../../../../helpers/helpers';
import { EntityRefLink } from '@kozmoai/plugin-catalog-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: theme.shadows[2],
      borderRadius: '4px',
      overflow: 'visible',
      position: 'relative',
      margin: theme.spacing(4, 1, 1),
      flex: '1',
      minWidth: '0px',
    },
  }),
);

const MemberComponent = (props: { member: UserEntity }) => {
  const classes = useStyles();
  const {
    metadata: { name: metaName, description },
    spec: { profile },
  } = props.member;
  const displayName = profile?.displayName ?? metaName;

  return (
    <Box className={classes.card}>
      <Box
        display="flex"
        flexDirection="column"
        m={3}
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          displayName={displayName}
          picture={profile?.picture}
          customStyles={{
            position: 'absolute',
            top: '-2rem',
          }}
        />
        <Box
          pt={2}
          sx={{
            width: '100%',
          }}
          textAlign="center"
        >
          <Typography variant="h6">
            <EntityRefLink
              data-testid="user-link"
              entityRef={props.member}
              title={displayName}
            />
          </Typography>
          {profile?.email && (
            <Link to={`mailto:${profile.email}`}>
              <OverflowTooltip text={profile.email} />
            </Link>
          )}
          {description && (
            <Typography variant="subtitle2">{description}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const useListStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  cardContent: {
    overflow: 'auto',
  },
  memberList: {
    display: 'grid',
    gap: theme.spacing(1.5),
    gridTemplateColumns: `repeat(auto-fit, minmax(auto, ${theme.spacing(
      34,
    )}px))`,
  },
}));

/** @public */
export const MembersListCard = (props: {
  memberDisplayTitle?: string;
  pageSize?: number;
  showAggregateMembersToggle?: boolean;
}) => {
  const {
    memberDisplayTitle = 'Members',
    pageSize = 50,
    showAggregateMembersToggle,
  } = props;
  const classes = useListStyles();

  const { entity: groupEntity } = useEntity<GroupEntity>();
  const {
    metadata: { name: groupName, namespace: grpNamespace },
    spec: { profile },
  } = groupEntity;
  const catalogApi = useApi(catalogApiRef);

  const displayName = profile?.displayName ?? groupName;

  const groupNamespace = grpNamespace || DEFAULT_NAMESPACE;

  const [page, setPage] = React.useState(1);
  const pageChange = (_: React.ChangeEvent<unknown>, pageIndex: number) => {
    setPage(pageIndex);
  };

  const [showAggregateMembers, setShowAggregateMembers] = useState(false);

  const { loading: loadingDescendantMembers, value: descendantMembers } =
    useAsync(async () => {
      if (!showAggregateMembersToggle) {
        return [] as UserEntity[];
      }

      return await getAllDesendantMembersForGroupEntity(
        groupEntity,
        catalogApi,
      );
    }, [catalogApi, groupEntity, showAggregateMembersToggle]);
  const {
    loading,
    error,
    value: directMembers,
  } = useAsync(async () => {
    const membersList = await catalogApi.getEntities({
      filter: {
        kind: 'User',
        'relations.memberof': [
          stringifyEntityRef({
            kind: 'group',
            namespace: groupNamespace.toLocaleLowerCase('en-US'),
            name: groupName.toLocaleLowerCase('en-US'),
          }),
        ],
      },
    });

    return membersList.items as UserEntity[];
  }, [catalogApi, groupEntity]);

  const members = removeDuplicateEntitiesFrom(
    [
      ...(directMembers ?? []),
      ...(descendantMembers && showAggregateMembers ? descendantMembers : []),
    ].sort((a, b) =>
      stringifyEntityRef(a).localeCompare(stringifyEntityRef(b)),
    ),
  ) as UserEntity[];

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  const nbPages = Math.ceil((members?.length || 0) / pageSize);
  const paginationLabel = nbPages < 2 ? '' : `, page ${page} of ${nbPages}`;

  const pagination = (
    <Pagination
      count={nbPages}
      page={page}
      onChange={pageChange}
      showFirstButton
      showLastButton
    />
  );

  let memberList: React.JSX.Element;
  if (members && members.length > 0) {
    memberList = (
      <Box className={classes.memberList}>
        {members.slice(pageSize * (page - 1), pageSize * page).map(member => (
          <MemberComponent member={member} key={member.metadata.uid} />
        ))}
      </Box>
    );
  } else {
    memberList = (
      <Box p={2}>
        <Typography>
          This group has no {memberDisplayTitle.toLocaleLowerCase()}.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid item className={classes.root}>
      <InfoCard
        title={`${memberDisplayTitle} (${
          members?.length || 0
        }${paginationLabel})`}
        subheader={`of ${displayName}`}
        {...(nbPages <= 1 ? {} : { actions: pagination })}
        className={classes.root}
        cardClassName={classes.cardContent}
      >
        {showAggregateMembersToggle && (
          <>
            Direct Members
            <Switch
              color="primary"
              checked={showAggregateMembers}
              onChange={() => {
                setShowAggregateMembers(!showAggregateMembers);
              }}
              inputProps={{ 'aria-label': 'Users Type Switch' }}
            />
            Aggregated Members
          </>
        )}
        {showAggregateMembers && loadingDescendantMembers ? (
          <Progress />
        ) : (
          memberList
        )}
      </InfoCard>
    </Grid>
  );
};