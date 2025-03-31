import '@styles/components/Wizard/wizard.css'
import React, { useEffect, useState } from 'react'
import { Step, WizardProps } from './type'

export function Wizard({
   content = [] as any[],
   step,
   setStep,
   canChangeStep = true
}: Readonly<WizardProps>) {
   const [steps, setSteps] = useState([] as Array<Step>)

   const stepList = React.useMemo(() => {
      if(content.length){
         return content.map((stepContent) => {
            const item = {
               bullet: Number(stepContent.key),
               content: stepContent,
            }
            return item
         })
      }
      return []
   }, [content])

   useEffect(() => {
      setSteps(stepList)
   }, [stepList])

   const moveStep = (step: number) => {
      if(!canChangeStep) return

      setStep(step)
   }

   const bulletClass = (bullet: number) => {
      if(bullet === step) return 'active'
      if(bullet < step) return 'done'
      return ''
   }

   const buildBullets = () => {
      return steps.map((item) => (
         <React.Fragment key={item.bullet}>
            <button
               className={`
                  step
                  ${bulletClass(item.bullet)}
               `}
               disabled={
                  !canChangeStep ||
                  item.bullet > step + 1
               }
               onClick={ () => moveStep(item.bullet) }
               aria-current={item.bullet === step ? 'step' : undefined} // Indicates the current step
               aria-disabled={!canChangeStep || item.bullet > step + 1} // Indicates if the step is disabled
               aria-label={`Step ${item.bullet}`} // Screen reader label
            >
            </button>
            { (item.bullet < steps.length) && (
               <hr
                  className="separator"
                  aria-hidden="true" />
            ) }
         </React.Fragment>
      ))
   }

   return (
      <section
         className="wizard"
         aria-label="Wizard Navigation">
         <menu className="steps-wrapper" role="list">
            { buildBullets() }
         </menu>
         <div
            className="steps-container"
            role="tabpanel"
            aria-labelledby={`step-${step}`}>
            <div className="content active">
               { steps.find((item) => item.bullet === step)?.content }
            </div>
         </div>
      </section>

   )
}