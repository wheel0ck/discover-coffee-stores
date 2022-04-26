import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import coffeeStoresData from '../../data/coffee-stores.json'

export async function getStaticProps({ params }) {
  return { props: { coffeeStore: coffeeStoresData.find((coffeeStore) => coffeeStore.id.toString() === params.id) } }
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return { params: { id: coffeeStore.id.toString() } }
  })

  return {
    paths,
    fallback: true,
  }
}

const CoffeeStore = (props) => {
  const router = useRouter()
  const { address, name, neighborhood } = props.coffeeStore

  if (router.isFallback) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">go home page</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighborhood}</p>
    </div>
  )
}

export default CoffeeStore
