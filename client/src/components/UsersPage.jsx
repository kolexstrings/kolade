import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import UserCard from './UserCard';

const UsersPage = ({ users }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
};

export default UsersPage;
