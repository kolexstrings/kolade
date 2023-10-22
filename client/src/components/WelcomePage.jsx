import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Heading, Image, Text, Flex } from '@chakra-ui/react';
import Layout from './Layout';
import { router, useRouter } from 'next/router';

const WelcomePage = () => {
   

    const handleRegisterClick = async () => {
        router.push('/registrationPage')
    }

    async function handleLoginClick() {
        // Handle the Login button click action
    }
    
    return (
        <Layout>
            <Center h="80vh">
                <Box p={5} bg="white" rounded="lg" shadow="lg" maxW="md" w="full">
                    <Image src="/your-image.png" alt="Kolade Logo" boxSize="100px" mx="auto" mb="4" />
                    <Heading as="h1" size="xl" textAlign="center" mb="4">
                        Welcome to Kolade
                    </Heading>
                    <Text fontSize="lg" textAlign="center" mb="8">
                    Empower Your Connections, Ignite Your Rewards.
                    </Text>
                    <Flex justify="space-between">
                        <Button
                            colorScheme="teal"
                            size="lg"
                            flex="1"
                            mr="2"
                            onClick={handleRegisterClick}
                        >
                            Register
                        </Button>
                        <Button
                            colorScheme="teal"
                            size="lg"
                            flex="1"
                            ml="2"
                            onClick={handleLoginClick}
                        >
                            Login
                        </Button>
                    </Flex>
                </Box>
            </Center>
        </Layout>
    );
}

export default WelcomePage;
