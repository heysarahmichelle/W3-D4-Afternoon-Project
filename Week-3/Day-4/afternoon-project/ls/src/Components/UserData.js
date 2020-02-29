import React, { Component } from 'react';

const UserData = props =>{
    return(
        <div>
            <section>
                <h1>Home</h1>
            </section>
            <p>{props.empNames.name.first} {props.empNames.name.last}</p>
            <section>First List
                <p>From: {props.empNames.city}, {props.empNames.country}</p>
                <p>Job Title:{props.empNames.title}</p>
                <p>Employer:{props.empNames.employer}</p>
            </section>
            <section>Second List
                <p>1. {props.empNames.favoriteMovies[0]}</p>
                <p>2. {props.empNames.favoriteMovies[1]}</p>
                <p>3. {props.empNames.favoriteMovies[2]}</p>
            </section>
        </div>
    )
}

export default UserData

