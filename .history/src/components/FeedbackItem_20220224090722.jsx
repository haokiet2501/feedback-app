import { FaTimes } from 'react-icons'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item }) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button></button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem