export interface gifs {
    id?: string;
    title: string;
    url: string;
}
export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=j1FeMIdk7rJ5YmgpRJ3mSqkyjrssa3MN&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs:gifs[] = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
};