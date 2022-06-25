import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardLink from './CardLink';
import CardPostTable from './CardPostTable';
import GeneralCardInterface from '../services/interfaces/generalCardInterface';
import api from '../services/axios/api';

const teste = [
  { postTitle: 'Invista seu dinheiro na bolsa, quer saber veja aqui', views: 147852 },
  { postTitle: 'Bitcoin e o futuro? Veja como investir e ficar milionario.', views: 145236 },
  { postTitle: 'Confiabilidade a mais de 100 anos.', views: 23654 },
];

const teste2 = '10.009.123';

export default function GeneralCard({ header, link, type }: GeneralCardInterface) {
  const [isLoading, setIsLoading] = useState(false);
  const [errLoading, setErrLoading] = useState(false);

  const newSearch = (value: string) => {
    setIsLoading(true);
    setErrLoading(false);
    const a = api.get(`/api/data/${value}`);
  };

  return (
    <article>
      <Flex>
        <CardHeader
          icon={header.icon}
          title={header.title}
          options={header.options}
          select={header.select}
        />
        {type === 'cases' ? (
          <Text>{teste2}</Text>) : (<CardPostTable posts={teste} />)}
        <CardLink text={link.text} href={link.href} />
      </Flex>
    </article>
  );
}
