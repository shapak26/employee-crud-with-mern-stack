import { Box, VStack, FormControl, FormLabel, Input, Flex, Button } from "@chakra-ui/react"
import { useState } from "react";
import axios from "axios"



function CreateEmployee() {

    const [employee, setemployee] = useState({})

    function handleOnChange(event) {
        const dataValue = { ...employee }

        dataValue[event.target.id] = event.target.value
        setemployee(dataValue)




    }

    function handleOnSubmit(event) {
        event.preventDefault()
        const employeeData = employee
        console.log(employeeData)
        axios.post('http://localhost:4000/employee/create-employee', employeeData).then(res => {
            console.log(res.data)
        })

    }





    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <Flex bgColor="#f8f8f8" h="100%" w="100%" justify="center" pt="5%" pb="10%">
                    <Box width="60%" height="100%" bgColor="#ffffff" pl="10%" pr="10%" pt="5%" pb="5%" borderColor="#eaeaea" boxShadow="base" borderRadius="5px">


                        <VStack w="100%" spacing="30px">
                            <FormControl id="name" w="100%">
                                <FormLabel color="#47525D" fontSize="18px">ชื่อพนักงาน</FormLabel>
                                <Input borderColor="#eaeaea" boxShadow="base" borderRadius="5px" value={employee.name} onChange={handleOnChange} />
                            </FormControl>

                            <FormControl id="work" w="100%">
                                <FormLabel color="#47525D" fontSize="18px">ตำแหน่งงาน</FormLabel>
                                <Input borderColor="#eaeaea" boxShadow="base" borderRadius="5px" value={employee.work} onChange={handleOnChange} />
                            </FormControl>
                            <FormControl id="salary" w="100%">
                                <FormLabel color="#47525D" fontSize="18px">เงินเดือน</FormLabel>
                                <Input borderColor="#eaeaea" boxShadow="base" type="number" borderRadius="5px" value={employee.salary} onChange={handleOnChange} />
                            </FormControl>

                            <Button bg="#336DF2" color="#ffffff" variant="solid" width="100%" fontSize="18px" fontWeight="medium" type="submit" >
                                เพิ่มข้อมูลพนักงาน
                            </Button>

                        </VStack>




                    </Box>


                </Flex>
            </form>
        </div>
    )
}

export default CreateEmployee