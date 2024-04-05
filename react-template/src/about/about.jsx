import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }

  return (
    <main style={{backgroundColor: "rgb(121, 106, 106)"}} className="container-fluid text-center">
            <h2>About</h2>
            <div id="picture" className="picture-box"><img src="duckbanner.jpg" alt="banner" /></div>
            <p style={{justifyContent: "left", alignItems: "left", aligContent: "left"}}>
                Introducing...SaveDuck! A twist on the classNameic word-guessing game. Do you like ducks? Ever felt that
                <del>Hangman</del> was a <i>tad</i> too dark? Delve into a world where every correct guess not
                only reveals the mystery word but also rescues an adorable duck. Join in this delightful
                journey where fun meets compassion. Experience all of the same fun and guess correctly to
                save the duck! 
            </p>
            <div id='picture' className='picture-box'>
              {imgEl}
            </div>
        </main>
  );
}