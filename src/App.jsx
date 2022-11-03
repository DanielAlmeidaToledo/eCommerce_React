import { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs';
import Nav from './components/Nav'
import Slide from './components/Slide'
import './App.css'
import Footer from './components/Footer';

function App() {
  const [prod, setProd] = useState([])
  const [produtos, setProdutos] = useState([])
  const [cart, setCart] = useState(0)
  const [item, setItem] = useState([])
  var busca = '';
  var result = [];

  useEffect(() => {
      fetch('https://api-toledosports.herokuapp.com/shirt')
      .then((response) => response.json())
      .then(setProd)
  }, [])

  useEffect(() => {
    if(produtos.length === 0){
      setProdutos(prod);
    }
  }, [prod])



  /* === CART === */

  const addProduct = (name, price, shirt, id) => {
    setCart((cart) => cart+1);
    let index = item.findIndex(pos => pos.id == id);
    if(index < 0){
      item.push({
        name: name,
        price: price,
        shirt: shirt,
        id: id,
        quant: 1,
      }); 
    } else{
      item[index].quant++;
      item[index].price += price;
    }
  }

  /* === SEARCH === */

  function searchFilter(Search){
    if(Search == 0){
      setProdutos(prod);
    }
    else{
      prod.map((aux) => {
        busca = aux.name.toLowerCase();
        if(busca.indexOf(Search.toLowerCase()) > 0){
          result.push(aux);
        }
      })
      setProdutos(result)      
    }
  }

  return (
    <div className="App">
      <Nav cart={cart} item={item} searchFilter={searchFilter}/>
      <Slide />

      <div className='product'>
        {produtos.map((item) => {
        const {id, name, shirt, price} = item;
        return (
          <div className='prod-item' key={id}>
            <img src={shirt} alt="Team tshirt" />
            <div className='prod-info'>
              <strong>{name}</strong>
              <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              <button className='btn-add' onClick={() => addProduct(name, price, shirt, id)}>
                <BsCartPlus size={25}/>
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App