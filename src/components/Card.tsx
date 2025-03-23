
import { ReactNode } from "react";

interface Props {
    header?: string;
    children?: ReactNode;
}

function Card({header, children}: Props) {
  return (
    <div className="table mt-3 mb-3 p-8 bg-gray-300 rounded-lg shadow-lg hover:bg-gray-400 transition hover:transition">
      <a href="#" className="max-w-md">
        <p className="text-lg mt-1 mb-3 text-gray-700">{header}</p>
        <h5 className="mb-2 text-xl font-bold tracking-light text-gray-900">{children}</h5>
      </a>
    </div>
  )
}

export default Card;
