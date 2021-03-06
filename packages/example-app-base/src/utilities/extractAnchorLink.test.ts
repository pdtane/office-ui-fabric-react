import { extractAnchorLink } from './extractAnchorLink';

describe('extractAnchorLink', () => {
  it('returns empty string for empty url', () => {
    expect(extractAnchorLink('')).toBe('');
  });

  it('throws on null/undefined url', () => {
    // tslint:disable:no-any
    expect(() => extractAnchorLink(undefined as any)).toThrow();
    expect(() => extractAnchorLink(null as any)).toThrow();
    // tslint:enable:no-any
  });

  it('returns empty string for url with no hash', () => {
    expect(extractAnchorLink('http://whatever')).toBe('');
  });

  it('returns empty string for url with empty hash', () => {
    expect(extractAnchorLink('http://whatever#')).toBe('');
    expect(extractAnchorLink('#')).toBe('');
  });

  it('returns empty string for url with only route hash', () => {
    expect(extractAnchorLink('#/components/checkbox')).toBe('');
    expect(extractAnchorLink('http://whatever#/components/checkbox')).toBe('');
  });

  it('returns empty string for url with only anchor', () => {
    expect(extractAnchorLink('http://whatever#Overview')).toBe('');
    expect(extractAnchorLink('#Overview')).toBe('');
  });

  it('returns anchor from url with route and anchor', () => {
    expect(extractAnchorLink('http://whatever#/components/checkbox#Overview')).toBe('Overview');
    expect(extractAnchorLink('#/components/checkbox#Overview')).toBe('Overview');
  });

  it('returns empty string for url with three hashes', () => {
    // unexpected but just in case?
    expect(extractAnchorLink('http://whatever#/components/checkbox#Overview#wat')).toBe('');
  });
});
