import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useState } from "react"

let unames = ["kernelk14", "queeknow", "renz", "jram", "etunisj", "dye_yep"]
let questions = ["What is this forum all about?", "Is this the real life, is this just fantasy?", "Bakit niya ako iniwan", "Negro ako", "Ang gwapo ko sobra", "I miss you rosemarie"]
//let unames: string[] = []
//let questions: string[] = []


export default function App() {
    const putQuery = (n: string, q: string) => {
    unames.push(n)
    console.log(n)
    questions.push(q)
    console.log(q)
  }

  const handler = () => putQuery(name, question)

  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <>
      <Navbar />
      <br />
      <div className="flex flex-col text-center items-center">
        <form className="form flex flex-col">
          <input type="text" className="p-2 mb-2 border-2 rounded-md" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} />

          <textarea className="p-2 border-2 rounded-md" placeholder="Enter Something Here." value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
          <button type="button" className="mt-2 border-2 rounded-xl hover:bg-[#00aaaf80]" onClick={handler}>Ask Question</button>
        </form>
      </div>
      <br />
      {unames.length === 0 ? <h2 className="text-2xl mt-4 mb-4 font-bold text-center">No Questions</h2> : <h2 className="text-2xl mt-4 mb-4 font-bold text-center">Hot Questions</h2>}
      
      
      <div className="cards flex flex-col justify-center ms-60 me-60 mt-5 mb-5">
        {
          unames.map((names, index) => (
            <Card header={names} key={index}>{questions[index]}</Card>
          )
        )}
      </div>
    </>
  )
}
