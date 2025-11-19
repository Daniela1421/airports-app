import '@testing-library/jest-dom';

// Mock para next/link
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});


