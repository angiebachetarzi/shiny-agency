import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/survey/1">Survey</Link>
      <Link to="/freelancers">Freelancers</Link>
    </nav>
  )
}

export default Header
