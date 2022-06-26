import React from 'react';
import PostsInterface from './postsInterface';

interface MainContentInterface {
  content: string | Array<PostsInterface>;
  newSearch: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default MainContentInterface;
