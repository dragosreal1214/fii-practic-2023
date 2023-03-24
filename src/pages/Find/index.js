import React, { useEffect, useState } from "react"

export default function Find() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [meme, setMemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMemes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <>{error.message}</>;
} else if (!isLoaded) {
    return <>loading...</>;
} else {
    return (
        /* here we map over the element and display each meme as a card  */
        <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search meme</span>
                        </label>
                    </div>
            <ul className="card-grid">
                {meme.map((meme) => (
                            <div className="card-content">
                                <h2 className="card-name">{meme.name}</h2>
                                <ol className="card-list">
                                </ol>
                            </div>
                ))}
            </ul>
        </div>
    );
}
}