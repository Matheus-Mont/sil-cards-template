import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import CardsContainer from '../components/CardsContainer';

export default function CardsTemplate() {
  const [isLoading, setIsLoading] = React.useState({ matheus: 'valor inicial' });

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setIsLoading(data));
  }, []);
  return (
    <div>
      <PageHeader />
    </div>
  );
}
