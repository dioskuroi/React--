import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../../style'

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        { 
          this.props.recommendList.map(item => (
            // 利用元素属性的方式将 imgUrl 传递到 style.js 中来设置背景图片
            <RecommendItem imgUrl={ item.get('imgUrl') } key={ item.get('id') }/>
          ))
         }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
