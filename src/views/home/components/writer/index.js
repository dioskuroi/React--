import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper } from '../../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        HomeWork
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Writer)