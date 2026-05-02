

const OPENING_LINES = ["Every story begins with one piece.", "The outfit hasn't met this piece yet.",
     "Something brought you here. What is it?", "Every look has a first chapter. This is yours.",
      "Before the outfit, there was the item.", "One piece. One memory. One story.", "The best wardrobes are built one piece at a time.", 
     "This piece has been waiting to be remembered.", "What are we adding to the story today?", "Every great look starts somewhere. Start here.", 
      "The closet remembers everything you add to it.", "Is this a new piece or an old love?", "Colombia called. It wants to know what you're adding.", 
    "Manolo started with one shoe. You start here.", "What's the story behind this one?"]

const line = OPENING_LINES[Math.floor(Math.random() * OPENING_LINES.length)]



function SaveImageStep({data, onChange}) {

    return (
        <div className="imageContainer">
            <h2>{line}</h2>
            <input type="image" 
                value={data.image} 
                onChange={e =>  onChange({image: e.target.value})}> 
            </input>

        </div>
    )

}

export default SaveImageStep