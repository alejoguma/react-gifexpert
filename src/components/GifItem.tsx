import { gifs } from "../helpers/getGifs";

export const GifItem = ({ title, url }: gifs) => {
    return (
        <div className="card">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
