import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item }) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

Card.defaultProps = {
    reverse: true,
}

Card.propTypes = {
    children: PropTypes
}

export default FeedbackItem