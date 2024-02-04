import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardAteliers() {
    return (
      <div className=" drop-shadow mt-6 mb-1">
      <Card className="h-full w-full text-colorbrown ">
        <CardHeader>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Prestation Ateliers Substances"
          />
        </CardHeader>
        <CardBody>
        <Typography variant="h5" className="ml-2 mb-2 pt-8 pb-2 text-5xl lg:text-4xl">
            Atelier
          </Typography>
          <Typography className="ml-2 font-subtitlefont text-4xl lg:text-2xl">
          Morbi nec ligula ipsum.Maecenas non mollis quam, eget viverra nisi. Sed vitae magna iaculis, sollicitudin nunc sitamet, bibendum sem.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link to="/atelier">
        <Button className="ml-2 text-3xl lg:text-2xl pt-3 pb-3 mb-6 bg-colorbrown capitalize">Découvrir</Button>
          </Link>
        </CardFooter>
      </Card>
      </div>
    );
  }