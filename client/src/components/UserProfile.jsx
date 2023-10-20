import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Center,
  Heading,
} from '@chakra-ui/react';

const UserProfile = ({ userName, photoURL, tokenAmount }) => {
  return (
    <Box p={5} bg="white" rounded="lg" shadow="lg">
      <Center>
        <Avatar size="xl" name={userName} src={photoURL} />
      </Center>
      <Heading as="h1" size="xl" mt={4} mb={2}>
        {userName}
      </Heading>
      <Text fontSize="lg" mb={8}>
        Token Amount: {tokenAmount}
      </Text>
    </Box>
  );
};

export default UserProfile;