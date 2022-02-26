function Card({ children, reverse }) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )
    return (
        <div className="card" style={
            background}>{children}</div>
    )
}

export default Card