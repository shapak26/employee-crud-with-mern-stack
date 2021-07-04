import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import CreateEmployee from './component/create-employee';
import EmployeeList from './component/employee-list';
import EmployeeEdit from './component/edit-employee';
import { ChakraProvider, Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'




function App() {
  return (


    <ChakraProvider>
      <Flex bgColor="#5390d9" pl="5%" pt="20px" pb="20px" pr="5%" align="center">
        <Box >
          <Heading as="h1" size="lg" color="#ffffff" >Employee CRUD</Heading>

        </Box>
        <Spacer />
        <Box pr="15px">
          <Link to={"/list"}>
            <Button>

              <Heading size="18px" >List</Heading>

            </Button>
          </Link>



        </Box>
        <Box pr="15px">
          <Link to={"/create"}>
            <Button>

              <Heading size="18px" >Create</Heading>

            </Button>
          </Link>
        </Box>
        <Box>
          <Link to={"/edit"}>
            <Button>

              <Heading size="18px" >Edit</Heading>

            </Button>
          </Link>
        </Box>

      </Flex>




      <Switch>
        <Route exact path="/" component={CreateEmployee} />
        <Route exact path="/create" component={CreateEmployee} />
        <Route exact path="/list" component={EmployeeList} />
        <Route exact path="/edit/:id" component={EmployeeEdit} />


      </Switch>



    </ChakraProvider >


  );
}

export default App;
