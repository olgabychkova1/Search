import React from "react";

const movies = [
    {
        picture: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Alien_movie_poster.jpg/213px-Alien_movie_poster.jpg ",
        name: "Alien (1979)",
        description: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of thecommercial space tug Nostromo who encounter the eponymous Alien, a deadly and aggressive extraterrestrial set loose on the ship. The film stars Tom Skerritt, Sigourney Weaver,Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto. It was produced by Gordon Carroll, David Giler and Walter Hill through their company Brandywine Productions, and was distributed by 20th Century Fox. Giler and Hill revised and made      additions to the script; Shusett was executive producer. The Alien and its accompanying artifacts were designed by the Swiss artist H. R. Giger, while concept artists Ron Cobb      and Chris Foss designed the more human settings.",
        date: "12.02.2019"

    },
    {
        picture: " http://hdkinomir.com/uploads/posts/2011-06/thumbs/1308066603_hdkinomir.jpg",
        name: "The Godfather (1972)",
        description: "In 1945, at his daughter Connie's wedding, Don Vito Corleone hears requests in his role as head of a New York crime family. His youngest son, Michael, who was a Marine during World War II, introduces his girlfriend, Kay Adams, to his family at the reception. Johnny Fontane, a famous singer and Vito's godson, seeks Vito's help in securing a movie      role; Vito dispatches his consigliere, Tom Hagen, to Los Angeles to persuade studio head      Jack Woltz to give Johnny the part. Woltz refuses until he wakes up in bed with thesevered head of his prized stallion. ",
        date: "13.02.2019"

    },
    {
        picture: "Alien_movie_poster.jpg",
        name: "Alien (1979)",
        description: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of thecommercial space tug Nostromo who encounter the eponymous Alien, a deadly and aggressive extraterrestrial set loose on the ship. The film stars Tom Skerritt, Sigourney Weaver,Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto. It was produced by Gordon Carroll, David Giler and Walter Hill through their company Brandywine Productions, and was distributed by 20th Century Fox. Giler and Hill revised and made      additions to the script; Shusett was executive producer. The Alien and its accompanying artifacts were designed by the Swiss artist H. R. Giger, while concept artists Ron Cobb      and Chris Foss designed the more human settings.",
        date: "14.02.2019"

    }
];

class Movie extends React.Component {
    render() {
        return (
            <div>
                {
                    movies.map(
                        (item, index) => {
                            return (
                                <div>
                                    <h1>{item.name}</h1>
                                    <img src={item.picture}></img>
                                    <p>{item.description}</p>
                                    <p>{item.date}</p>
                                </div>
                            )
                        }
                    )
                }

            </div>
        )
    }
}
export default Movie 