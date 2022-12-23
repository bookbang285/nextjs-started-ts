import asyncComponent from "@utility/asyncComponent"

const IndexPage = asyncComponent<any>(
  () => import ('@modules/Index')
)

export default function Home() {
  return <IndexPage />
}
