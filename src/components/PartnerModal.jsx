import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    Textarea,
    Select,
    Grid,
    GridItem,
    VStack,
    HStack,
    Text,
    Box
} from '@chakra-ui/react';
import { CheckCircle2 } from 'lucide-react';

const PartnerModal = ({ isOpen, onClose, title, subtitle, description, benefits }) => {
    // Form state
    const [formData, setFormData] = useState({
        companyName: '',
        website: '',
        firstName: '',
        lastName: '',
        businessRegistration: '',
        employees: '',
        email: '',
        phone: '',
        country: '',
        expertise: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        onClose();
        // Reset form
        setFormData({
            companyName: '',
            website: '',
            firstName: '',
            lastName: '',
            businessRegistration: '',
            employees: '',
            email: '',
            phone: '',
            country: '',
            expertise: '',
            address: ''
        });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", md: "xl", lg: "4xl" }}
            isCentered
            scrollBehavior="inside"
        >
            <ModalOverlay bg="rgba(26, 35, 50, 0.95)" backdropFilter="blur(10px)" />
            <ModalContent
                maxW={{ base: "100%", md: "90%", lg: "900px" }}
                maxH={{ base: "100vh", md: "90vh" }}
                borderRadius={{ base: "0", md: "xl" }}
                overflow="hidden"
                m={{ base: 0, md: 4 }}
            >
                <Box
                    bg="#3d4a6b"
                    color="white"
                    p={{ base: 6, md: 8 }}
                    position="relative"
                >
                    <ModalCloseButton
                        color="white"
                        size="lg"
                        _hover={{ bg: 'whiteAlpha.200' }}
                        top={{ base: 4, md: 6 }}
                        right={{ base: 4, md: 6 }}
                    />
                    <VStack align="start" spacing={{ base: 3, md: 4 }} pr={{ base: 8, md: 0 }}>
                        <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            fontWeight="bold"
                            color="green.300"
                            letterSpacing="wider"
                        >
                            {subtitle}
                        </Text>
                        <Text
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="bold"
                            lineHeight="shorter"
                        >
                            {title}
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            color="whiteAlpha.900"
                            maxW={{ base: "100%", md: "500px" }}
                            lineHeight="relaxed"
                        >
                            {description}
                        </Text>
                        <HStack
                            spacing={{ base: 4, md: 6, lg: 8 }}
                            mt={{ base: 2, md: 4 }}
                            flexWrap="wrap"
                            gap={{ base: 2, md: 0 }}
                        >
                            {benefits.map((benefit, index) => (
                                <HStack key={index} spacing={2}>
                                    <CheckCircle2 size={18} color="#10B981" />
                                    <Text fontSize={{ base: "xs", md: "sm" }}>{benefit}</Text>
                                </HStack>
                            ))}
                        </HStack>
                    </VStack>
                </Box>

                <ModalBody
                    p={{ base: 4, md: 6, lg: 8 }}
                    bg="white"
                    overflowY="auto"
                    maxH={{ base: "calc(100vh - 280px)", md: "calc(90vh - 280px)" }}
                >
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
                            <Text
                                fontSize={{ base: "xl", md: "2xl" }}
                                fontWeight="bold"
                                color="gray.800"
                            >
                                COMPANY DETAILS
                            </Text>

                            <Grid
                                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                                gap={{ base: 3, md: 4 }}
                            >
                                <GridItem>
                                    <FormControl isRequired>
                                        <Input
                                            name="companyName"
                                            placeholder="Company Name"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl>
                                        <Input
                                            name="website"
                                            placeholder="Website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl isRequired>
                                        <Input
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl isRequired>
                                        <Input
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl>
                                        <Input
                                            name="businessRegistration"
                                            placeholder="Business Registration"
                                            value={formData.businessRegistration}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl>
                                        <Input
                                            name="employees"
                                            placeholder="No of Employees"
                                            value={formData.employees}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl isRequired>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl isRequired>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl isRequired>
                                        <Select
                                            name="country"
                                            placeholder="Country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        >
                                            <option value="India">India</option>
                                            <option value="UAE">UAE</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Other">Other</option>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl>
                                        <Select
                                            name="expertise"
                                            placeholder="Expertise/Interest"
                                            value={formData.expertise}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        >
                                            <option value="Software Development">Software Development</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile Apps">Mobile Apps</option>
                                            <option value="IT Infrastructure">IT Infrastructure</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Other">Other</option>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={{ base: 1, md: 2 }}>
                                    <FormControl>
                                        <Textarea
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            size={{ base: "md", md: "lg" }}
                                            rows={3}
                                            borderColor="gray.300"
                                            _hover={{ borderColor: 'gray.400' }}
                                            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                                        />
                                    </FormControl>
                                </GridItem>
                            </Grid>

                            <Button
                                type="submit"
                                colorScheme="blue"
                                size={{ base: "md", md: "lg" }}
                                fontSize={{ base: "sm", md: "md" }}
                                fontWeight="bold"
                                px={{ base: 6, md: 10 }}
                                py={{ base: 5, md: 6 }}
                                w={{ base: "full", md: "auto" }}
                                alignSelf={{ base: "stretch", md: "flex-end" }}
                                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
                                transition="all 0.2s"
                            >
                                Send Message
                            </Button>
                        </VStack>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PartnerModal;
