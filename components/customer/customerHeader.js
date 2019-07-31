import Head from 'next/head'
import ActiveLink from '../ActiveLink'


export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <ActiveLink href='/'>
          <a>Home</a>
        </ActiveLink>{' '}
        |
        <ActiveLink href='/about'>
          <a>About</a>
        </ActiveLink>{' '}
        |
        <ActiveLink href='/contact'>
          <a>Contact</a>
        </ActiveLink>
      </nav>
    </header>

    {children}

    <footer>{'I`m here to stay'}</footer>
  </div>
)