import React from 'react';
import { Button, Link, Table } from '@radix-ui/themes';

const IssueActions = () => {
  return (
    <div className="mb-5 text-white">
      <Button className="mb-5 text-white">
        <Link href={'/issues/new'}>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
