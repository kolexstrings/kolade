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
import { factoryContract } from '@/utils/web3';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [userAccount, setUserAccount] = useState('');
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

  const requestAccounts = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if(accounts.length <= 1) {
        setUserAccount(accounts)
      } else if (accounts.length > 1) {
        setUserAccount(accounts[0])
      }
    } else {
      throw new Error('Web3 provider not found. Please install MetaMask or use a compatible browser.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await requestAccounts()
      if(factoryContract) {
        await factoryContract.methods.createUser(userName, tokenPurchaseAmount).send({
          from: userAccount, 
          value: tokenPurchaseAmount
        });
      } else {
        console.error("Factory contract not initiated yet")
      }
    } catch(error) {
      console.error("could not create new user: ", error);
    }
  };

  return (
    <Box p={5} bg="white" rounded="lg" shadow="lg">
      <Center>
        <Image src={profilePicture} alt="Profile" boxSize="100px" />
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
            value={tokenPurchaseAmount}
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

export default RegistrationForm;
