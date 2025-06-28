import { useEffect } from 'react';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading>Welcome to Your Dashboard</Heading>
        <Box p={6} bg="white" shadow="md" borderRadius="md">
          <VStack align="stretch" spacing={4}>
            <Box>
              <Text fontWeight="bold">Name:</Text>
              <Text>{user.name}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Email:</Text>
              <Text>{user.email}</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Dashboard; 