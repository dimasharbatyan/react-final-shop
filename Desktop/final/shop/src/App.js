import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import ThemeToggle from './components/ThemeToggle';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "სკამი რუხი",
          img: 'grey_chair.jpg',
          desc: 'lorem..',
          category: 'chairs',
          price: '49.99'
        },
        
        {
          id: 2,
          title: "მაგიდა",
          img: 'magida.jpg',
          desc: 'lorem..',
          category: 'tables',
          price: '139.99'
        },

        {
          id: 3,
          title: "ნათურა",
          img: 'natura.jpg',
          desc: 'lorem..',
          category: 'light',
          price: '24.99'
        },

        
        {
          id: 4,
          title: "სკამი თეთრი",
          img: 'Skeleton-Chair_White-1-h.jpg',
          desc: 'lorem..',
          category: 'chairs',
          price: '127.99'
        },
        {
          id: 5,
          title: "დივანი",
          img: 'divan.jpg',
          desc: 'lorem..',
          category: 'bed',
          price: '550.99'
        },

        {
          id: 6,
          title: "საწოლი",
          img: 'sawoli.jpg',
          desc: 'lorem..',
          category: 'bed',
          price: '2500.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)


  }
  render(){ 
    return (

    <div className="wrapper">
      <ThemeToggle/>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.showFullItem && <ShowFullItem/>}
      <Footer/>
    </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })

    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
