import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-[var(--primary)] dark:text-gray-100 light:bg-white light:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
