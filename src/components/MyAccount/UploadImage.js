import axios from 'axios';
import {Convert} from 'mongo-image-converter';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Input from '@mui/material/Input';






function UploadImage(props) {
    const [imageFile, setImageFile] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

        const submit = () => {
            const data = new FormData();
            imageFile.user_id = 'hhhhh7777';
            data.append('file', imageFile);
            console.log(data)
            axios.post('http://localhost:5000/upload', data)
            .then(res => console.log(res.data)).catch(err => console.log(err));
        }

    return(
    <div>
        title : <Input fullWidth placeholder="title" type = 'text' onChange = {(e) => setTitle( e.target.value ) } /><br/>
        description : <Input fullWidth placeholder="description" type = 'text' onChange = {(e) => setDescription( e.target.value ) } /><br/>
        price : <Input fullWidth placeholder="price" type = 'number' onChange = {(e) => setPrice( e.target.value ) } /><br/>
        image : <Input fullWidth placeholder="upload your file" type = 'file' name= "file" onChange = {(e) => setImageFile( e.target.files[0] ) } /><br/><br/><br/>
        <Button variant="contained" onClick = { submit } > upload </Button>
    </div>
)}

export default UploadImage;