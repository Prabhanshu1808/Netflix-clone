import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.css"
import Listcreate from "../listcreate/Listcreate"
import { useRef, useState } from "react"

 function List({list}) {


  const [ isMoved , setisMoved] = useState(false)
  const [ slideNumber, setSlideNumber ] = useState(0)

  const listRef = useRef();

  const handleClick = (direction) => {
    setisMoved(true)
    let distance = listRef.current.getBoundingClientRect().x -52
    if(direction === "left" && slideNumber > 0 ){ 
       setSlideNumber(slideNumber-1)
       listRef.current.style.transform = `translateX(${1475 + distance}px)`
    }
    if(direction === "right" && slideNumber < 1){ 
      setSlideNumber(slideNumber+1)
       listRef.current.style.transform = `translateX(${-1470 + distance}px)`
    }
    console.log(distance);

  }
  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}
            style={{display: !isMoved  && "none"}}/>
            <div className="container" ref={listRef}>
              {list.content.map((item , i) => (
                 <Listcreate index5={i} item={item}/>
              ))}
                
                         
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default List;