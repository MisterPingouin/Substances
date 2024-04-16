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
import formation from "../../images/formation.jpg";


export function CardFormation() {
  return (
    <div className="drop-shadow mt-6 mb-1 lg:w-[33%] h-[97%] lg:h-auto">
      <Card className="flex flex-col h-full w-full text-colorbrown rounded-none">
        <CardHeader className="m-0 p-0 rounded-none">
          <img
            src={formation}
            alt="Prestation Formation Substances"
          />
        </CardHeader>
        <CardBody className="flex flex-col flex-grow">
          <Typography
            variant="h2"
            className="pl-5 lg:pl-0 ml-2 mb-2 pt-8 pb-2 text-5xl lg:text-4xl"
          >
            Formation
          </Typography>
          <div className="pl-5 pr-5 lg:pl-0 lg:pr-0 ml-2 font-subtitlefont text-4xl lg:text-2xl flex-grow">
          Envie de développer vos connaissances sur cet univers ?
          </div>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <Link to="/formation">
            <Button className="ml-7 lg:ml-2 text-3xl lg:text-2xl pt-3 pb-3 mb-6 bg-colorbrown capitalize">
              Découvrir
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
