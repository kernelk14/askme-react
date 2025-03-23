import {ReactNode} from 'react'

interface Props {
    linkSrc?: string;
    children?: ReactNode;
}

const Link = ({linkSrc, children}: Props) => {
  return (
    <a href={linkSrc} className="text-md ms-1 me-1 py-1 px-3 text-gray-900 rounded-sm dark:text-white hover:bg-blue-700">{children}</a>
  )
}

export default Link;
