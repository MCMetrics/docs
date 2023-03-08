import {Head, Html, Main, NextScript} from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/*font*/}
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

                {/*favicons*/}
                <link rel="apple-touch-icon" sizes="180x180"
                      href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32"
                      href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16"
                      href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <body className="bg-white antialiased dark:bg-zinc-900">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
