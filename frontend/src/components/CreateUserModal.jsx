import {
  Button,
  useDisclosure,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  FormLabel,
  FormControl,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  RadioGroup,
  Radio,
} from '@chakra-ui/react'
import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<BiAddToQueue size={20} />}
      >
        {/* Add User */}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My New Friend 👊</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex
              gap={4}
              alignItems={'center'}
            >
              {/* Left side */}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              {/* Right side */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Software Developer" />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={'none'}
                overflow={'hidden'}
                placeholder="Tell me about your friend"
              />
            </FormControl>
            <RadioGroup
              defaultValue="male"
              mt={4}
            >
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateUserModal
