import React from "react"
import Movie from "./Movie"
class Article extends React.Component {
    render() {
        return (
            <article>
                <div>
                    <h1>My Movie</h1>
                    <Movie />
                     
                </div>
            </article>
        )
    }
}
export default Article