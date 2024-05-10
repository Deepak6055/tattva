import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from 'react-router-dom';
function Docucards({
    title,
    intro,
    path
  }
) {
  return (
    <div>
       <Card className="mt-6 w-96">
         <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {intro}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Link to={path}>
        <Button
        className='bg-[#070707]'>
            Read More</Button>
            </Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Docucards
