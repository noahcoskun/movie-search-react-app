import { ReactNode } from 'react'

// define the shape of props

interface Props {
    children: ReactNode;
    onClose: () => void;
}

export const Alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{children}</strong> You should check in on some of those fields below.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}
