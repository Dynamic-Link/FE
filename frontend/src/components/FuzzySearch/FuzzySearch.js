import React, { Component } from "react"
import ReactDOM from "react-dom"
import Fuse from "fuse.js"

const keys = {
  LINKNAME: "linkName",
  TITLE: "title"
}
const { LINKNAME, TITLE } = keys

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3,
  keys: [LINKNAME, TITLE]
}

class FuzzySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  onChange = e => {
    const { target = {} } = e
    const { value = "" } = target
    this.setState({ query: value }, () => {
      const { state = {}, onChange } = this
      const { query = "" } = state
      const { blogs = [], setData } = this.props
      const fuse = new Fuse(blogs, fuseOptions)
      const data = query ? fuse.search(query) : blogs
      setData(data)
    })
  }

  render() {
    const { state = {}, onChange } = this

    return <input placeholder="query" onChange={onChange} />
  }
}
export default FuzzySearch
