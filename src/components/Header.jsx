import {
    Link
} from "react-router-dom";
import './Header.css';
import { Button } from '@material-ui/core';

const Header = (props) => {
    return (
        <>
            <div className="header-container">
                <Button variant="contained" color="default"><Link to="/">Home</Link></Button>
                <Button variant="contained" color="default"><Link to="/newOrder">NEW ORDER</Link></Button>
                <Button variant="contained" color="default"><Link to="/addItems">ADD ITEMS</Link></Button>
            </div>
        </>
    )

}


export default Header