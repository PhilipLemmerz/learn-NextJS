'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({ name, label }) {

    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState();

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return
        }

        const fileReader = new FileReader();

        fileReader.onload = (() => {
            setPickedImage(fileReader.result)
        })

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image picked</p>}
                    {pickedImage && <Image src={pickedImage} alt="user picked image" fill />}

                </div>

                <input
                    ref={imageInput} onChange={handleImageChange}
                    type='file'
                    className={classes.input}
                    id={name}
                    accept='image/jpeg'
                    name={name}>
                </input>
            </div>
        </div>
    )
}