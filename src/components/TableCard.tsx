import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardHeader from './CardHeader';
import CardLink from './CardLink';
import GeneralCardInterface from '../services/interfaces/generalCardInterface';
import api from '../services/axios/api';
import CardPostTable from './CardPostTable';
import PostsInterface from '../services/interfaces/postsInterface';

export default function TableCard({ header, link, type }: GeneralCardInterface) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errLoading, setErrLoading] = useState<boolean>(false);
  const [content, setContent] = useState<Array<PostsInterface>>([{ postTitle: '', views: 0 }]);

  const apiRequest = (value:string) => {
    setIsLoading(true);
    setErrLoading(false);
    api
      .get(`/${type}/${(value).toLowerCase()}`)
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

  const newSearch = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    apiRequest(target.value);
  };
  useEffect(() => {
    apiRequest('Wallstreetbets');
  }, []);

  return (
    <article>
      <Flex>

        <CardHeader
          icon={header.icon}
          title={header.title}
          options={header.options}
          select={header.select}
          newSearch={newSearch}
        />

        {isLoading && !errLoading ? <Text>Carregando...</Text> : (
          <CardPostTable content={content} />)}

        {errLoading && <Text>Erro ao carregar</Text>}

        <CardLink text={link.text} href={link.href} />

      </Flex>
    </article>
  );
}
