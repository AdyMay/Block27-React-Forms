import React from 'react';

function Authenticate({ token }) {
    const handleClick = async () => {
        try {
            console.log("clicked");
            const res = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                header: {
                    "Content-type" : "applications/json",
                    Authorization: `Bearer ${ token }`,
                    },
                }
            );
        const json = await res.json();
            console.log(json);
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <>
        <h2>Authenticate</h2>;
        <button onClick={handleClick}>Autenticate</button>
    </>
  );
}

export default Authenticate;
