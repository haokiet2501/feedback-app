function Card({ children, reverse }) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )
    return (
        <div className="card" style={backg}>{children}</div>
    )
}

export default Card