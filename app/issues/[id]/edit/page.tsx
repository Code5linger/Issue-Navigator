import React from 'react';
import IssueForm from '../../_componenets/IssueForm';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

const EditIsssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIsssuePage;
