import {
  Avatar,
  Box,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { BiTrash } from 'react-icons/bi'
import React from 'react'
import EditModal from './EditModal'

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          <Flex
            flex={'1'}
            gap={'4'}
            alignItems={'center'}
          >
            <Avatar src="https://avatar.iran.liara.run/public" />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal />
            <IconButton
              variant={'ghost'}
              colorScheme="red"
              size={'sm'}
              aria-label="See Menu"
              icon={<BiTrash size={20} />}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardFooter>
        <Text>{user.description}</Text>
      </CardFooter>
    </Card>
  )
}

export default UserCard