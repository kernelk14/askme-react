import Link from "./Link"

function Navbar() {
  return (
    <>
      <nav className="bg-blue-600 p-2.5 sticky">
        <div className="max-w-screen w-full">
          <ul className="flex flex-row">
            <Link linkSrc="#">Home</Link>
            <Link linkSrc="#">About</Link>
            <Link linkSrc="#">Contact Us</Link>
          </ul>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar;
