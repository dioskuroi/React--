import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../../style'
import { actionCreators } from '../../store';

class List extends PureComponent {
  render() {
    const { articleList, currentPage, getMoreList } = this.props
    return (
      <div>
        { 
          articleList.map((item, index) => (
            <Link key={ index } to="/detail">
              <ListItem>
                <ListInfo>
                  <div className="title">{ item.get('title') }</div>
                  <div className="desc">{ item.get('desc') }</div>
                </ListInfo>
                <img className="pic" src={ item.get('imgUrl') } alt=""/>
              </ListItem>
            </Link>
          )) 
        }
        <LoadMore onClick={ () => getMoreList(currentPage) }>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  currentPage: state.getIn(['home', 'currentPage'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(currentPage) {
    const param = { page: currentPage + 1 }
    dispatch(actionCreators.getMoreList(param))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)