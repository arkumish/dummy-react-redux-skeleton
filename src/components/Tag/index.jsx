import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchTag} from '../../actions/action'
import _ from 'lodash'

export class Tag extends Component {
    componentWillMount() {
        const {TagData,FetchTagData} = this.props
        if (_.isEmpty(TagData)) {
            FetchTagData()
        }
      }

    render() {
        const { TagData } = this.props
        return (
            <div>
            {/* {console.log(TagData)} */}

             <h1>Tag data</h1>
            {!TagData && <p>Loading data....</p>}
            {!_.isEmpty(TagData) && (
                <>
                <p>STORIES : </p>
                <ul>
                {_.map(TagData.data.stories, tdata =>(
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
    TagData : state.tagData,
})

const mapDispatchToProps = (dispatch) => {
    return {
      FetchTagData: () => dispatch(fetchTag()),
      
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Tag)





