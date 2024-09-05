import React from 'react';
import { Button, Flex, Link, Table } from '@radix-ui/themes';
import IssueStatusFilter from './IssueStatusFilter';

const IssueActions = () => {
  return (
    <Flex mb={'5'} justify={'between'}>
      <IssueStatusFilter />
      <Button>
        <Link href={'/issues/new'}>New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
