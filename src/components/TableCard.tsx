import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardHeader from './CardHeader';
import CardLink from './CardLink';
import GeneralCardInterface from '../services/interfaces/generalCardInterface';
import api from '../services/axios/api';
import CardPostTable from './CardPostTable';
import PostsInterface from '../services/interfaces/postsInterface';
import ErrorScreen from './ErrorScreen';

export default function TableCard({ header, link, type }: GeneralCardInterface) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errLoading, setErrLoading] = useState<boolean>(false);
  const [content, setContent] = useState <Array<PostsInterface>>([{ postTitle: '', views: 0 }]);
  const [dataValue, setDataValue] = useState<string>('');

  const apiRequest = (value:string) => {
    setIsLoading(true);
    setErrLoading(false);
    setDataValue(value);
    api
      .get(`/${type}/${(value).toLowerCase()}`)
      .then(({ data }) => {
        setIsLoading(false);
        setErrLoading(false);
        setContent(data);
      })
      .catch(() => {
        setIsLoading(false);
        setErrLoading(true);
      });
  };

  const buttonSearch = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    apiRequest((target as HTMLButtonElement).name);
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
        {errLoading && <ErrorScreen value={dataValue} newSearch={buttonSearch} />}

        {isLoading && !errLoading ? <Text>Carregando...</Text> : null }

        {!isLoading && !errLoading ? <CardPostTable content={content} /> : null}

        <CardLink text={link.text} href={link.href} />

      </Flex>
    </article>
  );
}
