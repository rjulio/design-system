export type WizardProps = {
   readonly content: any[],
   readonly step: number,
   readonly setStep: any,
   readonly canChangeStep: boolean
}

export type Step = {
   bullet: number,
   content: React.ReactElement[]
}