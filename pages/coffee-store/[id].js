import { useRouter } from 'next/router'
import Link from 'next/link'
import coffeeStoresData from '../../data/coffee-stores.json'

export async function getStaticProps({ params }) {
  return { props: { coffeeStores: coffeeStoresData.find((coffeeStore) => coffeeStore.id.toString() === params.id) } }
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: false,
  }
}

const CoffeeStore = (props) => {
  const router = useRouter()

  return (
    <div>
      <Link href="/">go home page</Link>
      <p>{props.coffeeStores.address}</p>
    </div>
  )
}

export default CoffeeStore
