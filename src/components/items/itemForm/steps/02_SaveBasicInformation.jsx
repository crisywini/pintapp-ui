
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

const SUBCATEGORY_PROMPT_LINES = [
  "Every great outfit has a supporting character. What's this one's?",
  "A blouse? A shirt? Darling, details matter.",
  "Fashion is all about the little things. Which kind is this?",
  "Be specific. Even a wardrobe deserves a little organization.",
  "The devil wears Prada. But what exactly are you wearing?",
  "Not all tops are created equal. What makes this one special?",
  "Every silhouette tells a story. What's this one's?",
  "Is it a mini, a midi, or a moment? You decide.",
  "The right details make the outfit. What's the category within the category?",
  "Because calling everything a top would be a fashion crime.",
]

const CATEGORIES = [
  "Top",
  "Bottom",
  "Outerwear",
  "Shoes",
  "Accessory",
]

const nameLine = NAME_PROMPT_LINES[Math.floor(Math.random() * NAME_PROMPT_LINES.length)] 
const categoryLine = CATEGORY_PROMPT_LINES[Math.floor(Math.random() * CATEGORY_PROMPT_LINES.length)]

const subCategoryLine = SUBCATEGORY_PROMPT_LINES[Math.floor(Math.random() * SUBCATEGORY_PROMPT_LINES.length)]


function SaveBasicInformation({data, onChange}) {

  const handleChange = (field) => (e) => {
    onChange({...data, [field]: e.target.value})
  }

    return (
        <div className="nameAndCategoryItemForm">
            <h2>{nameLine}</h2>
            <input type="text" 
            placeholder="Name"
             value={data.name}
             onChange={handleChange("name")}/>

            <h2>{categoryLine}</h2>
            <select value={data.category} onChange={handleChange("category")}>
              <option value="" disabled> Select an option </option>
              { CATEGORIES.map((category) => (
                <option key={category} value={category}> {category}</option>
              ))

              }
            </select>


            <h2>{subCategoryLine}</h2>
            <input type="text" 
            placeholder="Sub category" 
            value={data.sub_category}
            onChange={handleChange("sub_category")}/>

        </div>
    )
}

export default SaveBasicInformation