import './ItemHomeSection.css'


const imageModules = import.meta.glob('../../assets/editorial/*', {eager: true})

const items = Object.entries(imageModules)
.filter( ([path]) => !path.includes('17') && !path.includes('18'))
.map(([path, module], index) => ({
    id: index +1, 
    name: `Look ${index +1}`, 
    rating: Math.floor(Math.random() * 10) + 1, 
    image: module.default,
})).slice(0, 10)


function ItemHomeSection() {

    return (

        <div className='itemsWrapper'>
            <div class="itemsTrack">
                {[...items, ...items].map((item, index) => (
                    <div key={index} className="item"> 
                        <img src={item.image}/>
                    </div>
                ))}
            </div>
        </div>
        

    )

}

export default ItemHomeSection;