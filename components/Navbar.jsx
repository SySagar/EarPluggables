import React from "react";
import Link from "next/link";
import { AiOutlineShopping,AiOutlineUser } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Online Headphones Shop</Link>
      </p>
      <TextField 
      className="search-bar"
      placeholder="Search headphones, speakers etc."
      sx={{
        width: '50%',
        paddingLeft:'20px',
      }}
      InputProps={{startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
    )}}
       label="" />
       <div className="grower" style={{display:'flex',flexDirection:'row',flexGrow:1}}></div>
       
       <div style={{display:'flex',gap:'20px', alignItems:'center'}}>
       <AiOutlineUser className="cart-icon" style={{fontSize:'26px',marginBottom:'5px'}} />
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
        >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
        </div>
      {showCart && <Cart />}
    </div>
  );
};

export default navbar;
