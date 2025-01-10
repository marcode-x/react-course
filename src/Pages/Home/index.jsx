import { useState, useEffect } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className="grid gap-3 grid-cols-3 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
    </Layout>
  )
}

export default Home;

