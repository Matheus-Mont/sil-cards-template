import { Link } from '@chakra-ui/react';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import CardLinkInterface from '../services/interfaces/cardLinkInterface';

export default function CardLink({ text, href }: CardLinkInterface) {
  return (
    <Link href={href}>
      {text}
      <HiArrowRight />
    </Link>

  );
}
