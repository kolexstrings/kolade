import React, { useState } from 'react';
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const PostCreation = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Text:', text);
    console.log('Image:', image);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="Enter the title of your post"
          value={title}
          onChange={handleTitleChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Text</FormLabel>
        <Textarea
          placeholder="Write your post content here"
          value={text}
          onChange={handleTextChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Image</FormLabel>
        <Input type="file" onChange={handleImageChange} />
      </FormControl>

      <Button
        colorScheme="teal"
        mt={4}
        onClick={handleSubmit}
        isDisabled={!title || !text || !image}
      >
        Submit Post
      </Button>
    </Box>
  );
};

export default PostCreation;
