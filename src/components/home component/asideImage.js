import image from "./../../images/fabrizio-magoni-boaDpmC-_Xo-unsplash.jpg"

const Image = () => {
    return (
        <div className="container asideimage">
            <img src={image}width="100%" height="100%"/>
            <div><i> Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t. — Gerard Depardieu</i></div>
        </div>
    )
}

export default Image