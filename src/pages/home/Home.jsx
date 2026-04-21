import ItemHomeSection from "../../components/items/ItemHomeSection"
import OutfitHomeSection from "../../components/outfit/OutfitHomeSection"

function Home(){
    return (
        <div>
            <OutfitHomeSection></OutfitHomeSection>
            <ItemHomeSection></ItemHomeSection>
        </div>   
    )
}

export default Home