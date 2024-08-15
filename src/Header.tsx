
function Header() {
  

  return (
   <header style={{ width: "100%",display: "inline-block", borderBottom: "1px solid green"}}>
    <div style={{ display: "inline-block", float: "left", margin: "10px 10px"}}>
      <a href="/">
        <input
        className="home"
        type="image"
        src="public/vite.svg"
        alt="홈페이지"
        />
      </a>
    </div>

    <div style={{display: "inline-block", float: "right", margin: "10px 10px"}}>
      <a href="https://github.com/cogmlwns9211">
        <input
        className="github"
        type="image"
        src="public/vite.svg"
        alt="깃허브"
         />
        </a>
        </div>
   </header>
  )
}

export default Header
