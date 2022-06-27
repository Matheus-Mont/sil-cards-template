import { Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardHeader from './CardHeader';
import CardLink from './CardLink';
import GeneralCardInterface from '../services/interfaces/generalCardInterface';
import api from '../services/axios/api';
import CardPostTable from './CardPostTable';
import PostsInterface from '../services/interfaces/postsInterface';
import ErrorScreen from './ErrorScreen';
import Loader from './Loader';

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
    <Flex
      borderRadius="10"
      direction="column"
      boxShadow="xl"
      w={{
        base: '40vh', md: '40vh', lg: '47vh', xl: '43vh',
      }}
      h={{
        base: '25vh', md: '25vh', lg: '27vh', xl: '24vh',
      }}
      bg="white"
      p={4}
      m={2}
    >

      <CardHeader
        icon={header.icon}
        title={header.title}
        options={header.options}
        select={header.select}
        newSearch={newSearch}
      />
      {errLoading && <ErrorScreen value={dataValue} newSearch={buttonSearch} />}

      {isLoading && !errLoading ? <Loader /> : null }

      {!isLoading && !errLoading ? <CardPostTable content={content} /> : null}

      <CardLink text={link.text} href={link.href} color="#90CDF4" arrow={link.arrow} />

    </Flex>
  );
}
