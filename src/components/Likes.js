function Likes({clickCounter}) {
  return (
      <>
        <button className="heart" onClick={clickCounter}><i className="fas fa-heart"></i></button>
      </>
  )
}

export default Likes