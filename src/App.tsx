import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'


const App = () => {
  return (
    // template areas are responsive, hence it is defined as an objec with base and large screens
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // 1024px
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' bg='yellow'>Aside</GridItem>
      </Show>
      <GridItem area='main' bg='coral'>Main</GridItem>
    </Grid>
    )
}


export default App
