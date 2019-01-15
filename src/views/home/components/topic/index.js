import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicList, TopicItem} from '../../style'

class Topic extends PureComponent {
  render() {
    return (
      <TopicList>
        { this.props.topicList.map(item => (
          <TopicItem key={ item.get('id') }>
            <img 
              src={ item.get('imgUrl') }
              alt="topic"
              className="topic-pic"
            />
            { item.get('title') }
          </TopicItem>
        )) }
      </TopicList>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)