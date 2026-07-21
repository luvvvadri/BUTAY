import { describe, expect, it } from 'vitest';
import robots from './robots';

describe('robots', () => {
  it('allows all crawling and points to the sitemap', () => {
    const result = robots();
    expect(result.rules).toEqual({ userAgent: '*', allow: '/' });
    expect(result.sitemap).toBe('https://butay.vercel.app/sitemap.xml');
  });
});
