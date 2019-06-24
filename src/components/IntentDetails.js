import React, { Component } from 'react'
import styled from 'styled-components'

import IntentDetailsList from '../components/IntentDetailsList'

// Material UI
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogContent from '@material-ui/core/DialogContent'

const CenterDiv = styled.div`
  text-align: center;
  padding-top: 25px;
  margin: auto;
  width: 250px;
  height: 150px;
  max-width: 100%;
  max-height: 100%;
`

class IntentDetails extends Component {
  constructor(props) {
    super(props)

    this.timeout = null
    this.dialogRef = React.createRef()
    this.state = {
      width: window.innerWidth,
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({
      width: this.dialogRef.current.clientWidth,
    })
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ loading: true })
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({
        width: this.dialogRef.current.clientWidth,
        loading: false,
      })
    }, 100)
  }

  render() {
    let detailsUI = (
      <DialogContent>
        <CenterDiv>
          <h3>Loading intent details...</h3>
          <CircularProgress />
        </CenterDiv>
      </DialogContent>
    )

    if (
      !this.props.loading &&
      this.props.data.length > 0 &&
      !this.state.loading
    ) {
      detailsUI = (
        <IntentDetailsList
          color={this.props.color}
          data={this.props.data}
          width={this.state.width}
        />
      )
    }

    return <div ref={this.dialogRef}>{detailsUI}</div>
  }
}

export default IntentDetails
