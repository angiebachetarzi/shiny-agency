import errorImg from '../../assets/404.svg'
import { WrapperColumn } from '../../utils/style/Wrapper'

function Error() {
  return (
    <WrapperColumn>
      <h1>Oops...</h1>
      <img src={errorImg} alt="error" />
      <h1>It looks like the page you're after doesn't exist</h1>
    </WrapperColumn>
  )
}

export default Error
