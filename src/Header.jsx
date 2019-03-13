import React from "react"
import User from "./User"
class Header extends React.Component {
    render() {
        return (
            <div ><a href="" >Search</a> | <a href="">My movie</a>
                <User />
            </div>
        )
    }
}
export default Header