import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;

  .banner-image {
    width: 100%;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  padding-top: 30px;
`

export const TopicList = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #333;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;

  .topic-pic {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  justify-content: space-between;

  .pic {
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  /* 
    利用 ${(props) => {}} 函数，我们可以通过 props 取到该元素上的属性
    所以，我们可以在 index.js 文件中的元素属性上添加自定义属性来传递数据到 style.js 中
   */
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  border-radius: 20px;
  background: #a5a5a5;
  margin: 30px 0;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`