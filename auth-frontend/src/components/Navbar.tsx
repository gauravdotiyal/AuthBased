import {
  Box,
  Flex,
  Button,
  Text,
  Link as ChakraLink,
  Container,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Box bg="blue.500" color="white" py={4}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <ChakraLink as={Link} to="/" _hover={{ textDecoration: 'none' }}>
            <Text fontSize="xl" fontWeight="bold">
              Auth App
            </Text>
          </ChakraLink>
          <Flex gap={4}>
            {user ? (
              <>
                <Text>Welcome, {user.name}!</Text>
                <Button
                  colorScheme="whiteAlpha"
                  variant="outline"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/login"
                  colorScheme="whiteAlpha"
                  variant="outline"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  to="/signup"
                  colorScheme="whiteAlpha"
                  variant="solid"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar; 