import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react';

const UserRegistration = () => {
  const [userName, setUserName] = useState('');
  const [tokenPurchaseAmount, setTokenPurchaseAmount] = useState(0);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleTokenAmountChange = (e) => {
    setTokenPurchaseAmount(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      if(!isConnected) {
        console.log("please connect to metamask first")
    } else {
      await koladeUserFactoryContract.methods.createUser.send(userName, tokenPurchaseAmount)({
        from: userAccount,
        value: tokenPurchaseAmount
      })
    }
  };

  return (
    <Box p={5} bg="white" rounded="lg" shadow="lg">
      <Center>
        <Image src="/your-default-profile-image.png" alt="Profile" boxSize="100px" />
      </Center>
      <Heading as="h1" size="xl" mt={4} mb={2}>
        User Registration
      </Heading>
      <Text fontSize="lg" mb={4}>
        Create your Kolade account and start your journey!
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>User Name</FormLabel>
          <Input
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            placeholder="Enter your username"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Worth of Token Purchase Min: 1000 wei</FormLabel>
          <Input
            type="number"
            value={tokenAmount}
            onChange={handleTokenAmountChange}
            placeholder="Enter amount in Wei"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Profile Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">
          Proceed
        </Button>
      </form>
    </Box>
  );
};

export default UserRegistration;
