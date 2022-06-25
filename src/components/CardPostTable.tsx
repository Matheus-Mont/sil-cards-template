import React from 'react';
import TableInterface from '../services/interfaces/tableInterface';

export default function CardPostTable({ posts }: TableInterface) {
  return (
    <div>
      <table>
        <tbody>
          {posts.map((post) => (
            <tr key={post.views}>
              <td>{post.postTitle}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
