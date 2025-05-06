import React, { useState, useEffect } from 'react'

function ImageGallery({ images }) {
    console.log('images', images);
    console.log('images is 0', images['0']);
    const [selectedImages, setSelectedImage] = useState(images['0'])
    const [isFading, setIsFading] = useState(false);
    // Update selected image when images are loaded
    useEffect(() => {
        if (images && images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [setSelectedImage]);

    if (!images || images.length === 0 || !selectedImages) {
        return <p className="text-center mt-10 text-gray-500">Loading images...</p>;
    }

    const handleImageChange = (img) => {
        setIsFading(true); // Start fading out
        setTimeout(() => {
            setSelectedImage(img); // Change the image after fade-out
            setIsFading(false); // Start fading in
        }, 700); // Duration of fade-out (300ms)
    };

    return (
        <div className='flex flex-col lg:flex-row gap-6 p-6'>
            <div className='flex lg:flex-col gap-4'>
                {
                    images.map((img, index) => (
                        <img key={index}
                            src={img}
                            onClick={() => handleImageChange(img)}
                            className={`bg-[#F0EEED] object-cover  w-20 h-20 lg:h-40 lg:w-40  cursor-pointer border-1  rounded-3xl ${selectedImages === img ? 'border-black' : 'border-gray-300'}`}
                        />
                    ))
                }
            </div>


            <div className="flex justify-center items-center w-full p-0 m-0">
                <img src={selectedImages} alt="selected" className={`w-full max-w-lg h-auto rounded-3xl bg-[#F0EEED] transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-40' : 'opacity-100'
                    }`} />
            </div>
        </div>
    )
}

export default ImageGallery