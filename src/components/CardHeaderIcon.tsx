import React from 'react';
import { AiOutlineEye, AiOutlineUnorderedList } from 'react-icons/ai';

interface Icon {
  icon: string;
}

export default function CardHeaderIcon({ icon }: Icon) {
  return icon === 'eye' ? <AiOutlineEye /> : <AiOutlineUnorderedList />;
}
