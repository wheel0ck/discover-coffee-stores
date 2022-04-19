import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
  const router = useRouter()
  return (
    <div>
      <Link href="/"></Link>coffe page
    </div>
  )
}

export default CoffeeStore
