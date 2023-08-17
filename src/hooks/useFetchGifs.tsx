import { useState, useEffect } from 'react';
import { getGifs, gifs } from "../helpers/getGifs";
export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<gifs[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages: gifs[] = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);
    return {
        images,
        isLoading
    }
}
