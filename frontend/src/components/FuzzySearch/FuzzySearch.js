import React, { Component } from "react"
import Fuse from "fuse.js"

const keys = {
  TITLE: "title",
  FIRST_NAME: "author.firstName",
  LAST_NAME: "author.lastName"
}
const { TITLE, FIRST_NAME, LAST_NAME } = keys

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3,
  keys: [TITLE, FIRST_NAME]
}

class FuzzySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      blogs: this.props.links
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { target = {} } = e
    const { value = "" } = target
    this.setState({ query: value })
  }
  render() {
    const { state = {}, onChange } = this
    const { blogs = [], query = "" } = state
    const fuse = new Fuse(blogs, fuseOptions)
    const data = query ? fuse.search(query) : blogs
    const Blog = ({ blog }) => {
      const { title, author, content } = blog
      const { firstName, lastName } = author
      const name = `${firstName} ${lastName}`
      return (
        <div style={{ margin: "1rem", padding: "1rem", border: "1px solid" }}>
          <div>Title: {title}</div>
          <div>Author: {name}</div>
        </div>
      )
    }

    const blogsJsx = data.map((x, i) => <Blog key={i} blog={x} />)
    return (
      <div className="App">
        <div>
          <input placeholder="query" onChange={onChange} />
        </div>
        {blogsJsx}
      </div>
    )
  }
}
export default FuzzySearch
