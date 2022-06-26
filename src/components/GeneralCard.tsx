import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CardHeader from './CardHeader';
import CardLink from './CardLink';
import GeneralCardInterface from '../services/interfaces/generalCardInterface';
import api from '../services/axios/api';
import GeneralCardMainContent from './GeneralCardMainContent';
import CasesInterface from '../services/interfaces/casesInterface';

export default function GeneralCard({ header, link, type }: GeneralCardInterface) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errLoading, setErrLoading] = useState<boolean>(false);
  const [content, setContent] = useState<CasesInterface>({ cases: '' });

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
    apiRequest('RJ');
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
          <GeneralCardMainContent content={content} />)}

        {errLoading && <ErrorScreen value={dataValue} apiRequest={apiRequest} />}

        <CardLink text={link.text} href={link.href} />

      </Flex>
    </article>
  );
}
