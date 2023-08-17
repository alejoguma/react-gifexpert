import { GifItem } from '../components/GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface GifGridpProps {
    category: string
}

export const GifGrid = ({ category }: GifGridpProps) => {
    const { images, isLoading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
