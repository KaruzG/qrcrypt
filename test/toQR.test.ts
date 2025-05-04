import { expect, test } from 'vitest';
import { toQR } from '../src/toQR';

test('toQR - type SVG', async () => {
  const QR = await toQR({ encrypt: false, returnType: 'svg', data: 'test' });
  const NORMALIZED_QR = QR.replace(/\s+/g, '')
  const EXPECTED = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h29v29H0z"/><path stroke="#000000" d="M4 4.5h7m3 0h1m3 0h7M4 5.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m4 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m2 0h2m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h1m1 0h1m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2M4 12.5h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m3 0h1m2 0h1M6 13.5h4m1 0h1m2 0h2m1 0h1m1 0h1m3 0h2M4 14.5h1m1 0h1m3 0h6m1 0h3m1 0h4M7 15.5h3m2 0h6m1 0h2m2 0h1M4 16.5h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h3m1 0h1m1 0h2M12 17.5h1m5 0h1m2 0h1m2 0h1M4 18.5h7m2 0h1m2 0h1m3 0h2m1 0h2M4 19.5h1m5 0h1m3 0h1m3 0h1m4 0h1M4 20.5h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h2M4 21.5h1m1 0h3m1 0h1m3 0h2m1 0h1m1 0h1m3 0h1M4 22.5h1m1 0h3m1 0h1m1 0h4m1 0h3m2 0h1m1 0h1M4 23.5h1m5 0h1m3 0h4m1 0h3m1 0h1M4 24.5h7m1 0h4m1 0h3m2 0h3"/></svg>`
  const NORMALIZED_EXPECTED = EXPECTED.replace(/\s+/g, '')
  expect(NORMALIZED_QR).toBe(NORMALIZED_EXPECTED)
})

test('toQR - type image', async () => {
  const QR = await toQR({ encrypt: false, returnType: 'image', data: 'test' });
  const NORMALIZED_QR = QR.replace(/\s+/g, '')
  const EXPECTED = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAALPSURBVO3BQa7jSAwFwUxC97/yGy+5KkCQ7OlPMMJ8sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUMqv5SEO1S6JNyh8ktJeKJYoxRrlGKNcvGyJLxJ5USlS8IdKl0STpLwJpU3FWuUYo1SrFEuvkzljiTckYSTJHQqXRKeULkjCd9UrFGKNUqxRrkYRuUkCZMVa5RijVKsUS7+OJWTJHQqJ0n4y4o1SrFGKdYoF1+WhG9KQqdyRxKeSMK/pFijFGuUYo1y8TKVX1LpktCpdEnoVLoknKj8y4o1SrFGKdYo5oNBVE6SMFmxRinWKMUa5eIhlS4JnUqXhE6lS0Kn0iXhJAmdyolKl4Q7VLoknKh0SXhTsUYp1ijFGsV88EUqTyShU+mScKJykoROpUtCp9Il4Q6VkyQ8UaxRijVKsUa5eEilS8JJEu5QOVH5JpU7VP5PxRqlWKMUaxTzwQ+p3JGEE5VvSkKncpKEE5UuCW8q1ijFGqVYo5gPHlDpktCpdEnoVLokdCpdEk5U7khCp3JHEjqVLgmdykkSnijWKMUapVijmA/+MJUuCW9S6ZJwotIl4USlS8ITxRqlWKMUa5SLh1R+KQldEjqVLgknKl0SuiScqNyh8k3FGqVYoxRrlIuXJeFNKnckoVPpktAl4USlS0KXhCeS8KZijVKsUYo1ysWXqdyRhDtUnlDpknCHykkSTlS6JDxRrFGKNUqxRrn445JwotKpdEnoVLokdCpdEp5IwpuKNUqxRinWKBd/nMo3qTyh0iWhU+mS8ESxRinWKMUa5eLLkvBNSThROVE5SUKn0qmcJKFT6ZLwpmKNUqxRijXKxctUfknliSR0Kp3KSRJOVE5UuiQ8UaxRijVKsUYxH6wxijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKN8h+dsx746sV0YgAAAABJRU5ErkJggg==`
  const NORMALIZED_EXPECTED = EXPECTED.replace(/\s+/g, '')
  expect(NORMALIZED_QR).toBe(NORMALIZED_EXPECTED)
})

test('toQR - type text', async () => {
  const QR = await toQR({ encrypt: false, returnType: 'text', data: 'test' });
  const NORMALIZED_QR = QR.replace(/\s+/g, '')
  const EXPECTED = `                             
    █▀▀▀▀▀█ ▄ █ ▄ █▀▀▀▀▀█    
    █ ███ █  ▄▄▀  █ ███ █    
    █ ▀▀▀ █ ▀█ █▀ █ ▀▀▀ █    
    ▀▀▀▀▀▀▀ ▀▄█ ▀ ▀▀▀▀▀▀▀    
    ▀ █▄█▄▀▄  █▄▀▄ ▄▀  █▄    
    ▀ ▀▄▄▄▀▀████▄█▀█▄▀▀█▀    
    ▀ ▀ ▀ ▀ ▄▀▀▀ ▀█▀ █ ▀█    
    █▀▀▀▀▀█  ▀▄ ▀ ▄ ▀▀ █▀    
    █ ███ █ ▀▀█▄▀▄▀▄▀▀ █▀    
    █ ▀▀▀ █ ▀▀██▄█▀█▄▄▀▄▀    
    ▀▀▀▀▀▀▀ ▀▀▀▀ ▀▀▀  ▀▀▀`
  const NORMALIZED_EXPECTED = EXPECTED.replace(/\s+/g, '')
  expect(NORMALIZED_QR).toBe(NORMALIZED_EXPECTED)
})