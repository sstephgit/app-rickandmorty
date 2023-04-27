const urlBase = 'https://rickandmortyapi.com/api/character'

export const getChartactersByName = async (name) => {
    
    const resp = await fetch( `${urlBase}/?name=${name}`);
    const { results } = await resp.json();

    const characters = results.map( character => ({
        id: character.id,
        name: character.name,
        img: character.image
    }));
    
    return characters;
}


export const getChartactersAll = async () => {
    
    const resp = await fetch( `${urlBase}`);
    const { results } = await resp.json();

    const characters = results.map( character => ({
        id: character.id,
        name: character.name,
        img: character.image
    }));
    
    return characters;
}


export const getChartactersById = async (id) => {
    
    const resp = await fetch( `${urlBase}/${id}`);
    const results  = await resp.json();

    
    
    return results;
}