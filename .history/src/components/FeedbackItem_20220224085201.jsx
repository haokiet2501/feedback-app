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

Card.PropD = {
    reverse: true,
}

export default FeedbackItem