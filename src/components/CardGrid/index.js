import Card from '../card';
import { useFetchCharacters } from '../../hooks/useFetchCharacters';

export const CardGrid = ({characters}) => {

    const { images, isLoading } = useFetchCharacters( characters );
    
    return (
        <>
           
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <Card 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}

