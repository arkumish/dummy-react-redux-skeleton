import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCategory} from '../../actions/action'
import _ from 'lodash'

export class Category extends Component {
    componentWillMount() {
        const {CategoryData,FetchCategoryData} = this.props
        if (_.isEmpty(CategoryData)) {
            FetchCategoryData()
        }
      }

    render() {
        const { CategoryData } = this.props
        return (
            <div>
                
             <h1>Category data</h1>

            {!_.isEmpty(CategoryData) && (
                <>
                <p>Category : {CategoryData.data.category.name}</p>
                <p>Slug : {CategoryData.data.category.slug}</p>
                </>
            )} 
           
            {_.isEmpty(CategoryData) && <p>Loading data....</p>}
            {!_.isEmpty(CategoryData) && (
                <>
                <p>STORIES : </p>
                <ul>
                {_.map(CategoryData.data.stories, tdata =>(
                   <li>{tdata.title}</li>
                ))}
                </ul>
                </>
            )}
    
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    CategoryData : state.categoryData,
})

const mapDispatchToProps = (dispatch) => {
    return {
      FetchCategoryData: () => dispatch(fetchCategory()),
      
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Category)





