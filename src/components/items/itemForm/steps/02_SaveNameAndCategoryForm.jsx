
const NAME_PROMPT_LINES = [
  "Every look needs a name. What's this one called?",
  "Give this piece its title.",
  "What do we call this one?",
  "A name it will answer to forever.",
  "Names are forever. Choose wisely.",
  "What's this piece's name in your story?",
  "The Tuesday blazer. The Ibagué polo. What's this one?",
  "Every piece has a name waiting to be given.",
  "What does this piece call itself?",
  "Name it like it matters. Because it does.",
]

const CATEGORY_PROMPT_LINES = [
  "Where does this piece live?",
  "Every piece has its place. What's this one's?",
  "Top, bottom, shoes — where does this belong?",
  "File it correctly. Your future self will thank you.",
  "What category claims this one?",
  "Where in the wardrobe does this live?",
  "Give it a home.",
  "Every piece belongs somewhere.",
  "What is this piece's role in the story?",
  "Tops lead. Bottoms follow. Shoes close. Where is this?",
]

const nameLine = NAME_PROMPT_LINES[Math.floor(Math.random() * NAME_PROMPT_LINES.length)] 
const categoryLine = CATEGORY_PROMPT_LINES[Math.floor(Math.random() * CATEGORY_PROMPT_LINES.length)]


function SaveNameAndCategory({data, onChange}) {
    return (
        <div className="nameAndCategoryItemForm">
            <h2>{nameLine}</h2>
            <input type="text" placeholder="Name" value={data.name}/>
            <h2>{categoryLine}</h2>
            <input type="text" placeholder="Category" value={data.category}/>
        </div>
    )
}

export default SaveNameAndCategory