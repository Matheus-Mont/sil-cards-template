import { Link } from '@chakra-ui/react';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

export default function CardLink() {
  return (
    <Link href=".">
      Text goes here
      <HiArrowRight />
    </Link>

  );
}
