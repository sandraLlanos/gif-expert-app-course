export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vv7jZZ6Cxzd94x26ygnbieo560TAdJPs&q=${category}&limit=10`;
    const resp = await fetch(url);
    const  { data = [] } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log('resp :>> ', resp);
    // console.log('data :>> ', data);
    // console.log('gifs :>> ', gifs);
    return gifs;
}