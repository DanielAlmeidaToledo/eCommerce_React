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

const teams = [
  {id: 1, name: "Brasil", logo: "https://logodownload.org/wp-content/uploads/2017/11/cbf-logo-escudo-confederacao-brasileira-futebo-2.png"},
  {id: 2, name: "Paris Saint German", logo: "https://pt.psg.fr/img/DefaultOpenGraphImage.jpg?20220913"},
  {id: 3, name: "Barcelona", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png"},
  {id: 4, name: "Real Madrid", logo: "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png"},
  {id: 5, name: "Manchester City", logo: "https://upload.wikimedia.org/wikipedia/pt/0/02/Manchester_City_Football_Club.png"},
  {id: 6, name: "Manchester United", logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png&h=200&w=200"},
  {id: 7, name: "Liverpool", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"},
  {id: 8, name: "Bayern de Munique", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"},
  {id: 9, name: "Borussia Dortmund", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/800px-Borussia_Dortmund_logo.svg.png"},
];

const shirt = [
  {id: 1, name: "Camiseta Brasil Jogador 22/23", shirt: "https://cdn.shopify.com/s/files/1/0602/8132/3746/products/Designsemnome_14_752770e5-28a8-4350-a8f9-bb724fb0032e_600x.png?v=16601", price: 199.90},
  {id: 2, name: "Camisa Brasil Torcedor 22/23", shirt: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/865/527/products/camisa-reserva-da-selecao-brasileira-2022-nike-away-kit-1-removebg-preview1-69d7bf68dd1247972816611916238725-640-01-5aa28135fde8268ad516627723460017-640-0.png", price: 199.90 },
  {id: 3, name: "Camisa Barcelona Torcedor 22/23", shirt: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/774/384/products/camisa-barcelona-home-2223-torcedor-nike-masculina-azul-marinho-azul-royal-e-vermelho-2022-homem-casa-2022-2023-principal-novo-uniforme-011-c6ada03e711e69a58916548298248606-640-0.png", price: 249.90 },
  {id: 4, name: "Camisa Paris Saint German 22/23", shirt: "https://images.mantosdofutebol.com.br/wp-content/uploads/2022/07/Camisa-reserva-do-PSG-2022-2023-e-lancada-pela-Jordan-6.jpg", price: 179.90 },
  {id: 5, name: "Camisa Manchester City 21/22", shirt: "https://cdn.shopify.com/s/files/1/0618/8361/3346/products/1_1_0df47bb6-8e16-4c72-ba7e-0798f15a43ed_720x720_crop_center.png?v=1660843552", price: 149.90 },
  {id: 6, name: "Camisa Manchester United 20/21", shirt: "https://cdn.awsli.com.br/600x700/570/570965/produto/23289360/1bd92c8846.jpg", price: 129.90 },
  {id: 7, name: "Camisa Liverpool Jogador 22/23", shirt: "https://lojadocraque.com.br/wp-content/uploads/2021/07/loser-2.png", price: 109.90 },
  {id: 8, name: "Camisa Bayern de Munique 20/21", shirt: "https://cf.shopee.com.br/file/bd22a73a307f21c3424b471fc5ac55bd", price: 149.90 },
  {id: 9, name: "Camisa Borussia Dortmund 21/22", shirt: "https://static.netshoes.com.br/produtos/camisa-borussia-dortmund-home-2122-sn-torcedor-puma-masculina/30/2I3-2335-030/2I3-2335-030_zoom1.jpg?ts=1643646676", price: 169.90 },
  {id: 10, name: "Camisa Real Madrid 22/23", shirt: "https://static.netshoes.com.br/produtos/camisa-real-madrid-home-2021-sn-torcedor-adidas-masculina/14/NQQ-3199-014/NQQ-3199-014_zoom1.jpg?ts=1605027142&ims=544x", price: 199.90 },
  {id: 11, name: "Camisa Barcelona 22/23 Jogador", shirt: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/865/527/products/camisa-reserva-do-barcelona-2022-2023-e-lancada-pela-nike-6-removebg-preview1-264d4a84c777c8d4d016586177300809-640-0.png", price: 199.90 },
  {id: 12, name: "Camisa Paris Saint German Jogador 22/23", shirt: "https://cdn.shopify.com/s/files/1/0602/8132/3746/products/Messi-Away-2_600x.jpg?v=1634254989", price: 199.90 },
  {id: 13, name: "Camisa Liverpool 21/22 Torcedor", shirt: "https://static.netshoes.com.br/produtos/camisa-liverpool-home-2122-sn-torcedor-nike-masculina/90/HZM-6204-290/HZM-6204-290_zoom1.jpg?ts=1630605074&ims=544x", price: 189.90 },
  {id: 14, name: "Camisa Chelsea 20/21 Azul", shirt: "https://images.tcdn.com.br/img/img_prod/754539/camisa_chelsea_20_21_azul_bb_507_1_ddda726748d770fb5f099e1475933daf.jpg", price: 139.90 },
  {id: 15, name: "Camisa Arsenal 20/21", shirt: "https://images.tcdn.com.br/img/img_prod/754539/camisa_arsenal_listras_20_21_449_1_ee8177cf9b00c3604a2b9cd329b6c532.jpg", price: 134.99 },
  {id: 16, name: "Camisa Puma Manchester City Torcedor", shirt: "https://static.netshoes.com.br/produtos/camisa-manchester-city-home-2122-sn-torcedor-puma-masculina/08/2I3-2331-008/2I3-2331-008_zoom1.jpg?ts=1643646729", price: 169.99 },
]

  useEffect(() => {
      setProd(shirt);
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
      <Slide teams={teams}/>

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