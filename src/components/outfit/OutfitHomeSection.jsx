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
        <div className="grid">

            <div className={`card ${getSize(outfits.at(0).image)}`}>
                <img src={outfits.at(0).image} alt={outfits.at(0).name}></img>
            </div>
        </div>
    )
}

export default OutfitHomeSection