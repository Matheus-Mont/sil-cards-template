import { Link } from '@chakra-ui/react';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

interface CardLink {
  text: string;
  href: string;
}

export default function CardLink({ text, href }: CardLink) {
  return (
    <Link href={href}>
      {text}
      <HiArrowRight />
    </Link>

  );
}
