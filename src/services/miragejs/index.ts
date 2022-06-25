import { createServer } from 'miragejs';
import CasesInterface from '../interfaces/casesInterface';
import PostsInterface from '../interfaces/postsInterface';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/data/rj', () => ({ cases: '2.316.183' } as CasesInterface));
    this.get('/data/sp', () => ({ cases: '5.665.324' } as CasesInterface));
    this.get('/data/mg', () => ({ cases: '3.572.319' } as CasesInterface));
    this.get('/posts/wallstreetbets', () => ([
      { postTitle: 'Now I know where to put mu money', views: 52140 },
      { postTitle: 'Here is one of us, and frankly he should business', views: 17757 },
      { postTitle: 'Crazy times, the stocks', views: 6812 },
    ] as Array<PostsInterface>));
    this.get('/posts/bovespa', () => ([
      { postTitle: 'Invista seu dinheiro na bolsa, quer saber veja aqui', views: 147852 },
      { postTitle: 'Bitcoin e o futuro? Veja como investir e ficar milionario.', views: 145236 },
      { postTitle: 'Confiabilidade a mais de 100 anos.', views: 23654 },
    ] as Array<PostsInterface>));
  },
});
