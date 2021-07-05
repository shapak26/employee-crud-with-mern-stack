import {
    Table,
    Thead,
    Tbody,

    Tr,
    Th,
    Td, Button

} from "@chakra-ui/react"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import axios from "axios"

function EmployeeList() {

    const [employees, setEmployee] = useState([])

    useEffect(() => {
        axios.get('http://shrouded-chamber-34460.herokuapp.com/employee/get-employee').then(res => {
            setEmployee(res.data)

        })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(employees)

    function deleteEmployee(id) {
        axios.delete('http://shrouded-chamber-34460.herokuapp.com/employee/delete-employee/' + id).then((res) => {
            console.log("Delete laew")
        }).catch((error) => {
            console.log(error)
        })
    }




    return (
        <div>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Work</Th>
                        <Th >Salary</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        employees.map((employee) => {
                            return (

                                <Tr key={employee._id}>
                                    <Td>{employee.name}</Td>
                                    <Td>{employee.work}</Td>
                                    <Td> {employee.salary} </Td>
                                    <Td><Button onClick={() => {
                                        deleteEmployee(employee._id)
                                    }}>Delete</Button></Td>
                                    <Td>
                                        <Link to={"/edit/" + employee._id}>
                                            <Button>
                                                Edit
                                            </Button>
                                        </Link>

                                    </Td>
                                </Tr>

                            )

                        })
                    }


                </Tbody>

            </Table>
        </div >
    )
}

export default EmployeeList