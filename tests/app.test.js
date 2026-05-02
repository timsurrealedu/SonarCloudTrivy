const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /health', () => {
  it('should return healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});

describe('POST /echo', () => {
  it('should echo the text', async () => {
    const res = await request(app)
      .post('/echo')
      .send({ text: 'hello BNCC' });
    expect(res.statusCode).toBe(200);
    expect(res.body.echo).toBe('hello BNCC');
  });

  it('should return 400 if no text', async () => {
    const res = await request(app).post('/echo').send({});
    expect(res.statusCode).toBe(400);
  });
});
