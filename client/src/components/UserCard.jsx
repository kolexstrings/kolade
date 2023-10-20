import React from 'react';
import { Box, Image, Text, Stack, Center } from '@chakra-ui/react';

const UserCard = ({ user }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      m={4}
    >
      <Image src={user.photo} alt={user.username} />

      <Box p="6">
        <Center>
          <Stack spacing={1} align="center">
            <Text fontWeight="bold" fontSize="lg">
              {user.username}
            </Text>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

export default UserCard;
