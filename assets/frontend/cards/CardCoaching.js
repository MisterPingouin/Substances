import React from "react";
import { Link } from "react-router-dom"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardCoaching() {
    return (
      <div className=" drop-shadow mt-6 mb-1 lg:w-[33%]">
      <Card className="h-full w-full text-colorbrown ">
        <CardHeader>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Prestation Coaching Substances"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="ml-2 mb-2 pt-8 pb-2 text-5xl lg:text-4xl">
            Conseil
          </Typography>
          <Typography className="ml-2 font-subtitlefont text-4xl lg:text-2xl">
          Professionnels de ces univers, vous êtes dans le coeur opérationnel de l'activité de votre entreprise au quotidien.
Un simple avis ou un accompagnement sur des problématiques métiers pour vous aider sur votre vision stratégique ?          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mt-auto lg:flex lg:justify-center">
        <Link to="/conseil">
        <Button className="ml-2 text-3xl lg:text-2xl pt-3 pb-3 mb-6 bg-colorbrown">P<span className="lowercase">lus de précisions</span></Button>
          </Link>
        </CardFooter>
      </Card>
      </div>
    );
  }