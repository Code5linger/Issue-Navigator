import { Button } from '@radix-ui/themes';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const EditIssueButton = ({ issueID }: { issueID: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issueID}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
