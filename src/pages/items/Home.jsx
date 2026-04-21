import { useItems } from "../../hooks/useItems";
import ItemCard from "../../components/items/ItemCard";

function Home(){

    const {data: items, isLoading, isError, error} = useItems()
    console.log("Items.......")
    console.log(items)
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Found and error {error.message}</p>

    return (
        <div>
            <h1>Items</h1>
            {items.map( item => (
                <ItemCard
                    key={item.id}
                    name={item.name}
                    category={item.category}
                    brand={item.brand}
                    photo={item.photo}

                />
            ))

            }
        </div>
    )

}

export default Home