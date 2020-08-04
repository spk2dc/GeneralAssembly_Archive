import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='navBar'>
      <Link to='/user/register'>REGISTER</Link>
      <Link to='/user/login'>LOGIN</Link>
      <Link to='/dog'>DOG</Link>
    </div>
  );
}
