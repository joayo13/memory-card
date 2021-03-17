import React, { useState, useEffect } from 'react'
import './CardContainer.css'

function CardContainer(props) {

    const pictureArray = [ "https://images-na.ssl-images-amazon.com/images/I/41W8YHXvN%2BL._AC_.jpg",
     "https://i.pinimg.com/originals/b8/64/a5/b864a5224eccc107594cf2f5a84b6af8.jpg",
      "https://guysgirl.com/wp-content/uploads/2013/01/top-model.jpg",
       "https://i.pinimg.com/originals/40/da/fa/40dafaf185e7af2950e0b57b4a3dd5e3.jpg",
        "https://img.wattpad.com/cover/109684452-288-k95460.jpg", 
        "https://i.pinimg.com/originals/8f/a9/11/8fa91183ac378ec914a1f1f83a0df941.jpg",
        "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-family-guy-Patrick-Warburton.jpg",
        "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-family-guy-seth-green.jpg"]

        const [randomizedPictureArray, setRandomizedPictureArray] = useState([])
        const [selectedPictures, setSelectedPictures] = useState([])


        useEffect( () => {
            setRandomizedPictureArray(pictureArray)
            
        },[])

        useEffect(() => {
          hasDuplicates(selectedPictures)
        },[selectedPictures])



        
        function hasDuplicates(array) {
          var valuesSoFar = Object.create(null);
          for (var i = 0; i < array.length; ++i) {
              var value = array[i];
              if (value in valuesSoFar) {
                console.log('true')
                props.setCount(-1)
                console.log(props.count)
                setSelectedPictures([])
                  return true;
              }
              valuesSoFar[value] = true;
          }
          console.log('false')
          props.setCount(props.count + 1)
          console.log(props.count)
          return false;
      }
      


        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array
          }
          

    const handleCardClick = (event) => {
        setSelectedPictures( selectedPictures.concat(event.target.style.backgroundImage))
        setRandomizedPictureArray(shuffle(pictureArray))
    }

    
    return (
        <div>
        <div className="cardContainerBody">
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[0]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[1]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[2]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[3]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[4]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[5]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[6]})`}}></div>
            <div className="card" onClick={handleCardClick} style={{backgroundImage:`url(${randomizedPictureArray[7]})`}}></div>
        </div>
        </div>
    )
}

export default CardContainer
