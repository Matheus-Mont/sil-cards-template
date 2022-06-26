import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardHeader from './CardHeader';
import CardLink from './CardLink';
import CardPostTable from './CardPostTable';
import GeneralCardInterface from '../services/interfaces/generalCardInterface';
import api from '../services/axios/api';
import GeneralCardMainContent from './GeneralCardMainContent';
import PostsInterface from '../services/interfaces/postsInterface';

const teste = [
  { postTitle: 'Invista seu dinheiro na bolsa, quer saber veja aqui', views: 147852 },
  { postTitle: 'Bitcoin e o futuro? Veja como investir e ficar milionario.', views: 145236 },
  { postTitle: 'Confiabilidade a mais de 100 anos.', views: 23654 },
];

const teste2 = '10.009.123';

export default function GeneralCard({ header, link, type }: GeneralCardInterface) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errLoading, setErrLoading] = useState<boolean>(false);
  const [typeData, setTypeData] = useState('');
  const [content, setContent] = useState<string | Array<PostsInterface>>('');

  const newSearch = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    setErrLoading(false);
    const a = api
      .get(`/api/${type}/${(target.value).toLowerCase()}`)
      .then(({ data }) => {
        setIsLoading(false);
        setContent(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrLoading(true);
        console.log(error);
      });
  };

  useEffect(() => {
    setTypeData(type);
  }, []);

  return (
    <article>
      <Flex>
        <CardHeader
          icon={header.icon}
          title={header.title}
          options={header.options}
          select={header.select}
        />
        {isLoading && !errLoading ? <Text>Carregando...</Text> : (
          <GeneralCardMainContent content={content} newSearch={newSearch} />)}
        <CardLink text={link.text} href={link.href} />
      </Flex>
    </article>
  );
}
