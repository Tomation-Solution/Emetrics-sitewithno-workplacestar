import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}

            <script
              // strategy="lazyOnload"
              src={`https://embed.tawk.to/${process.env.NEXT_PUBLIC_PROPERTY_ID}/${process.env.NEXT_PUBLIC_WIDTH_ID}`}
              async 
            />
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}