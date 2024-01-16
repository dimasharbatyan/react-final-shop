import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'ყველა'
                },
                {
                    key: 'chairs',
                    name: 'სკამები'
                },
                {
                    key: 'tables',
                    name: 'მაგიდები'
                },
                {
                    key: 'light',
                    name: 'ნათურები'
                },

                {
                    key: 'bed',
                    name: 'საწოლები'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories