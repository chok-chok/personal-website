//import supertest from 'supertest';
//import server from '../index';

describe('End-to-end test for API endpoints of books api', () => {
  test('Placeholeer test', () => {
    expect(1).toBe(1);
  });
  /*
  test('List books request should works', () => {
    return supertest(server)
      .get('/books')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.books.length).toBeGreaterThan(0);
      });
  });

  test('List books request with status query param should works', () => {
    return supertest(server)
      .get('/books?status=READING')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.books.length).toBeGreaterThan(0);
      });
  }); */
});
