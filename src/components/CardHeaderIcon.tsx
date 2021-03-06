import React from 'react';
import { AiOutlineEye, AiOutlineUnorderedList } from 'react-icons/ai';
import IconInterface from '../services/interfaces/iconInterface';

export default function CardHeaderIcon({ icon }: IconInterface) {
  return icon === 'eye' ? <AiOutlineEye size="4vh" /> : <AiOutlineUnorderedList size="4vh" />;
}
