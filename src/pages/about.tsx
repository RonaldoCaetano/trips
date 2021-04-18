import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PagesTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter()

  //retorna um loading, qualquer coisa enquanto a rota está sendo criada
  if (router.isFallback) return null

  return <PagesTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return { paths }
}

// export const getStaticProps = async () => {
//   const { pages } = await client.request(GET_PAGES)

//   console.log(pages)

//   return {
//     props: {}
//   }
// }

// getStaticPaths -> serve para gerar as urls em build time - /about, /trip
// getStaticProps -> serve para buscar dados da página (props) - build time - estático
// getServerSideProps -> serve para buscar dados da página (props) - runtime - toda requisição (bundle fica só no server)
// getInitialProps -> serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
