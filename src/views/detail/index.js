import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom' 
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {

  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{ title }</Header>
        <Content 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    const { match: { params: { id } }, getDetailData } = this.props
    getDetailData(id)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData({id}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))