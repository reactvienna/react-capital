/**
 * Override the Next.js default document to provide styled-components SSR support
 */
import Document, { Head, Main, NextScript } from 'next/document';
import { styleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = styleSheet.getCSS();
    return { ...page, style };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: this.props.style }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
