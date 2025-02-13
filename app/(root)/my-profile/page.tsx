import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <>
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
        className="mb-10">
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={[]} />
    </>
  );
};

export default page;
