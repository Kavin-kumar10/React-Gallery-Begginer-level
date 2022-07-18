import React, { Component, useState } from 'react'
import "../App.css"
import $ from 'jquery'


const Gallery = () => {

    const Menu = [
        {
            imgsrc:"./my pics/sam1.jpeg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam2.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam3.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam4.jpeg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam5.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam6.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam7.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam8.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam9.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/sam10.jpg",
            catagory:"c1"
        },
        {
            imgsrc:"./my pics/animal7.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/animal1.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/animal2.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/animal3.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/animal4.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/animal5.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/animal6.jpg",
            catagory:"c3"
        },
        {
            imgsrc:"./my pics/anime1.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime2.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime3.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime4.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime5.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime6.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime7.jpg",
            catagory:"c2"
        },
        {
            imgsrc:"./my pics/anime8.jpg",
            catagory:"c2"
        },
    ]
  
const [state,setState] = useState(Menu) 
const filterPic=(catagory)=>{
    const updatedPic = Menu.filter((curElem)=>{
        return curElem.catagory === catagory
    })
    console.log(updatedPic);
    setState(updatedPic)
}


const [filterDesign,setFilterDesign] = useState(false)
const changebgcolor = () =>{
    if(window.scrollY){
        setFilterDesign(true)
    }
    else{
        setFilterDesign(false)
    }
}

window.addEventListener('scroll',changebgcolor)
return (
    <div className="Gallery">
        <div id='filter' className={filterDesign?'scrolling-active' :'filter'}>
            <ul>
                <li onClick={()=>filterPic("c1")}>Nature</li>
                <li onClick={()=>filterPic("c2")}>Anime</li>
                <li onClick={()=>filterPic("c3")}>Pets/Animals</li>
                <li onClick={()=>setState(Menu)}>Show All</li>
            </ul>
        </div>
        <div className="header">
            <h1 id='head'><b><span>Hello!</span> Welcome to kavin-kumar10 Gallery with filters!</b></h1>
        </div>
        <div className="photo-contain">
            {state.map((img,index)=>{
                const displayPic = () =>{
                    return(
                        <div className="show">
                            <img src = {img.imgsrc} />
                        </div>
                    )
                }
                return(
                    <a href={img.imgsrc} target="_blank">
                    <img key={index} src={img.imgsrc} onClick = {displayPic}/>
                    </a>

                )
            })}
        </div>
    </div>
    )
  }



export default Gallery





// export default class Gallery extends Component {
  
//     constructor(props){
//         super(props)
//         this.state = 
//             [
//                 {
//                     id:1,
//                     imgsrc:img1,
//                     catagory:"c1"
//                 },
//                 {
//                     id:2,
//                     imgsrc:img2,
//                     catagory:"c3"
//                 },
//                 {
//                     id:3,
//                     imgsrc:img3,
//                     catagory:"c1"
//                 },
//                 {
//                     id:4,
//                     imgsrc:img4,
//                     catagory:"c2"
//                 },
//                 {
//                     id:5,
//                     imgsrc:img5,
//                     catagory:"c2"
//                 },
//                 {
//                     id:6,
//                     imgsrc:img6,
//                     catagory:"c1"
//                 },
//                 {
//                     id:7,
//                     imgsrc:img7,
//                     catagory:"c3"
//                 },
//                 {
//                     id:8,
//                     imgsrc:img8,
//                     catagory:"c2"
//                 }
//             ]
//     }
//   render() {
//     const filterPic=(catagory)=>{
//         const updatedPic = this.state.filter((curElem)=>{
//             return curElem.catagory === catagory
//         })
//         console.log(updatedPic);
//         this.setState([{imgsrc:updatedPic}])

//     }
//     return (
//         <div className="Gallery">
//             <div className="filter">
//                 <ul>
//                     <li onClick={()=>filterPic("c1")}>Nature</li>
//                     <li onClick={()=>filterPic("c2")}>Anime</li>
//                     <li onClick={()=>filterPic("c3")}>Clothes</li>
//                 </ul>
//             </div>

//             <div className="photo-contain">
//                 {this.state.map((img,index)=>{
//                     return(
//                         <img key={index} src={img.imgsrc}/>
//                     )
//                 })}
//             </div>
//         </div>
//     )
//   }
// }
