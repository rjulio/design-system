import '@styles/components/Button/group.css'

export function ButtonGroup({ children } : { readonly children: React.ReactNode }) {
   return (
      <div className="button-group">
         {children}
      </div>
   )
}