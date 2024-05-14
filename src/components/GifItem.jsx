// eslint-disable-next-line react/prop-types
export const GifItem = ({title, url}) => {
    // console.log('title :>> ', title);
    // console.log('url :>> ', url);
    
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
