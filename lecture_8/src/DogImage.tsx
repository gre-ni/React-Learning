import { useState, useEffect } from "react";

// I found this structure out from the API docs
type DogImage = {
    message: string;
    status: string;
};

export const DogImage = () => {
    const [imageUrl, setImageUrl] = useState<DogImage | undefined>(undefined);

    useEffect(() => {
        const getDogImage = async (): Promise<void> => {
            // I need to have promise return type specified
            const response = await fetch(
                "https://dog.ceo/api/breeds/image/random",
            );
            // await with brackets because otherwise it would retype already the undefined when it's not yet ready
            const data = (await response.json()) as DogImage; // I am casting into the type I set up
            setImageUrl(data);
        };
        getDogImage();
    }, []);

    console.log(imageUrl);

    if (!imageUrl) {
        return <p>Loading...</p>;
    }

    return <img src={imageUrl.message} width="300px" />;
};
