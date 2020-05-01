const sayHello = require('..');

describe('Funkcja sayHello', () => {
  it('powinna zwrócić string', async () => {
    const result = sayHello();
    const result2 = sayHello('test');

    expect(typeof result).toBe('string');
    expect(typeof result2).toBe('string');
  });

  it('powinna zwrócić "Hello world" jeżeli nie podano żadnego parametru', async () => {
    const result = sayHello();

    expect(result).toBe('Hello world');
  });

  it('powinna zwrócić połączenie tekstu "Hello " i przekazanego parametru', async () => {
    expect(sayHello('Tomasz')).toBe('Hello Tomasz');
    expect(sayHello(undefined)).toBe('Hello world');
    expect(sayHello(null)).toBe('Hello null');
    expect(sayHello(false)).toBe('Hello false');
    expect(sayHello(0)).toBe('Hello 0');
  });
});
