import React from 'react'
import { useEffect,useState } from 'react';
import styled from 'styled-components'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';

export default function Popular(){

    const[popular,setPopular]=useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=ec06928398b24eb0a54128f2bd1dcf97&number=9`)
        const data = await api.json();
        console.log(data);      
        setPopular(data.recipes)
    }
    return(
                <div>
                    
                <Wrapper>
                    <h3>Popular Picks</h3> 
                    <Splide options={{perPage:4,arrows:false,pagination:false,drag:'free',gap:"5rem"}}>
                    {popular.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                            </SplideSlide>
                        )
                    })}   
                    </Splide>
                </Wrapper>
                
                </div>

    );
}


const Wrapper=styled.div`
margin:4rem 0rem;
`;


const Card = styled.div`
    min-height:25rem;
    border-radius:2rem;
    overflow:hidden;
    position:relative

    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;

    }

    p{
        position:absolute;
        z-index:10;
       left:10%;
        bottom:0%;
        tranform:translate(-50%,0%);
        color:white;
        width:100%;
        text-align:center;
        font-weight:600;
        font-size:1rem;
        height:40%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;