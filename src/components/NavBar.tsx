import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'

const NavBar = () => {
  return (
    // Stack is a layout component used to group elements together and apply a space between them.
    <HStack>
        <Image src={logo} boxSize='60px'></Image>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar
