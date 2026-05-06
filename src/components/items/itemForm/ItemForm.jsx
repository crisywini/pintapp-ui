import { useState } from 'react'
import './ItemForm.css'
import SaveImageStep from './steps/01_SaveImageForm'
import SaveNameAndCategory from './steps/02_SaveNameAndCategoryForm'
import SaveStoryLocationAndDate from './steps/03_SaveStoryLocationAndDateForm'


const STEPS = [SaveImageStep, SaveNameAndCategory, SaveStoryLocationAndDate]

function ItemForm() {

    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        image: '', 
        name: '',
        category: '',
        brand: '', 
        color: '',
        size: '', 
        material: '', 
        season: '',
        occasion: '',
        story: '', 
        memory_location: '', 
        memory_date: '',
    })


    const StepComponent = STEPS[currentStep]

    const next = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length -1))
    const prev = () => setCurrentStep(prev => Math.max(prev - 1, 0))

    const updateData = (newData) => {
        setFormData(prev => ({...prev, ...newData}))
    } 

    return (
        <div className='itemFormWrapper'>

            <div className='itemSlidesComponentWrapper'>
                <StepComponent data={formData} onChange={updateData}></StepComponent>
            </div>
            

            <div className='itemSlideNavigatorWrapper'>
                <button onClick={prev} disabled={currentStep === 0}>Previous</button>
                <span>{currentStep + 1} / {STEPS.length}</span>

                {currentStep < STEPS.length - 1
                    ? <button onClick={next}>Next</button> 
                    : <button onClick={() => console.log(formData)}>Save</button>
                }
            </div>

        </div>
    )

}

export default ItemForm