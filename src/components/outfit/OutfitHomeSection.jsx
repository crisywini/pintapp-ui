import { Link } from 'react-router-dom'
import './OutfitHome.css'


const imageModules = import.meta.glob('../../assets/editorial/*', {eager: true})


/*
const outfits = [
  { id: 1, image: 'https://picsum.photos/400/600?random=1', name: 'Look 1', rating: 9 },
  { id: 2, image: 'https://picsum.photos/400/500?random=2', name: 'Look 2', rating: 6 },
  { id: 3, image: 'https://picsum.photos/400/400?random=3', name: 'Look 3', rating: 3 },
  { id: 4, image: 'https://picsum.photos/400/700?random=4', name: 'Look 4', rating: 8 },
  { id: 5, image: 'https://picsum.photos/400/450?random=5', name: 'Look 5', rating: 5 },
  { id: 6, image: 'https://picsum.photos/400/550?random=6', name: 'Look 6', rating: 7 },
]*/

const outfits = Object.entries(imageModules)
.filter( ([path]) => !path.includes('17') && !path.includes('18'))
.map(([path, module], index) => ({
    id: index +1, 
    name: `Look ${index +1}`, 
    rating: Math.floor(Math.random() * 10) + 1, 
    image: module.default,
})).slice(0, 10)

function getSize(rating) {
    if (rating >= 8) return 'card--large'
    if (rating >= 5) return 'card--medium'
    return 'card--small' 
}


function OutfitHomeSection() {
    return (
        <div className="outfitContainer">

            <div className="seeTheLookContainer">
                <div className={`outfitSectionOne card--large`}>
                    <img src={outfits.at(1).image} alt={outfits.at(1).name}></img>
                </div>
                <Link to="/" className="seeTheLookLink">
                        See the Looks
                </Link>
            </div>

            <div className="outfitsGridContainer">
                {outfits.slice(0, 4).map(outfit =>(
                    <div key={outfit.id} >
                        <img src={outfit.image} alt={outfit.name}></img>
                        </div>                
                ) )}
            </div>

            <div className="whatToWearContainer">
                <Link to="/" className="seeTheLookLink">
                        What to wear?
                </Link>
                <div className={`outfitSectionOne card--large`}>
                    <img src={outfits.at(1).image} alt={outfits.at(1).name}></img>
                </div>
            </div>
            
        </div>
    )
}

export default OutfitHomeSection