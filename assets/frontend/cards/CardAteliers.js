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
      <Card className="mt-6  h-full w-auto">
        <CardHeader color="blue-gray">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-5xl">
            Atelier
          </Typography>
          <Typography className="font-subtitlefont text-4xl">
          Morbi nec ligula ipsum.Maecenas non mollis quam, eget viverra nisi. Sed vitae magna iaculis, sollicitudin nunc sitamet, bibendum sem.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link to="/atelier">
          <Button className=" bg-colorbrown">Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }