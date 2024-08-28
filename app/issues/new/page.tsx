'use client';

import { Button, TextField } from '@radix-ui/themes';

// import SimpleMDE from 'react-simplemde-editor';
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import 'easymde/dist/easymde.min.css';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control } = useForm<IssueForm>();
  console.log(register('title'));

  return (
    <form className="max-w-xl space-y-3">
      <TextField.Root
        placeholder="Title"
        {...register('title')}
      ></TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
