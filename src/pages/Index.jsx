import React, { useState } from "react";
import { Box, Button, Textarea, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaRobot, FaVideo } from "react-icons/fa";

const Index = () => {
  const [script, setScript] = useState("");
  const toast = useToast();

  const handleProcessVideo = () => {
    // This function would ideally handle the process described above.
    // Currently, it just simulates the action.
    setScript("Generated script will appear here after processing the video...");
    toast({
      title: "Processing Video",
      description: "The video is being processed to generate a script.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Video to Script Converter
      </Heading>
      <Text>Use AI to convert video speech to a readable script.</Text>
      <Button leftIcon={<FaVideo />} colorScheme="blue" onClick={handleProcessVideo}>
        Process Video
      </Button>
      <Textarea placeholder="Generated script will be displayed here..." value={script} readOnly />
    </VStack>
  );
};

export default Index;
