import { useState } from 'react';
import Modal from 'react-modal';
import * as HoverCard from '@radix-ui/react-hover-card';
import { BsCart2, BsPerson, BsTrash, BsPlusCircleFill, BsSearch } from 'react-icons/bs';
import './Nav.css'

function Nav({ cart , item, searchFilter}){
    const [modalIsOpen, setIsOpen] = useState(false)
    const [Quantidade, setQuantidade] = useState(cart)
    const [Search, setSearch] = useState(cart)

    var valorTotal = 0; //Valor total dos produtos do carrinho

    /* === MODAL === */

    function openModal(){
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    /* === CART === */

    function removeItem(id,quant){
        setQuantidade((Quantidade) => Quantidade - quant);
        let index = item.findIndex(pos => pos.id == id);
        item.splice(index, 1);
    }

    function addItem(price, id, quant){
        setQuantidade((Quantidade) => Quantidade + 1);
        let index = item.findIndex(pos => pos.id == id);
        item[index].price = price/quant * ++quant;
        item[index].quant++;
    }

    return (
        <div className='navbar'> 

            <a href="">
                <img className='nav-logo' src='/logo.png' />
            </a>

            <div className='nav-div'>

                <div className='nav-info'>
                    <input 
                        type="text" 
                        placeholder='O que você procura?'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className='btnSearch' onClick={() => searchFilter(Search)} >
                        <BsSearch size={15} />
                    </button>
                    <a className='login'>
                        <BsCart2 size={30} onClick={openModal} />
                        <span>{cart + Quantidade}</span>
                    </a>
                    <HoverCard.Root>
                        <HoverCard.Trigger className='shopCart'>
                            <BsPerson size={30}/>                                
                        </HoverCard.Trigger>

                        <HoverCard.Content>
                            <div className='infoUser'>
                                <h4>Login/Cadastrar</h4>
                                <span>Função não disponível no momento.</span>
                            </div>
                        </HoverCard.Content>
                    </HoverCard.Root>
                </div>

                <Modal 
                    className="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                >   
                    <div className='close'>
                        <a className='closeX' onClick={closeModal}>X</a>                        
                    </div>
                    <h3 className='titleCart'>CARRINHO DE COMPRAS</h3>
                    
                    {item.map((props) => {
                        var {name , price, shirt, id, quant} = props;
                        return (
                            <div className="modal-div" key={id}>
                                <table>
                                    <thead>
                                        <tr>
                                            <td className='tImg'>
                                                <img src={shirt} alt="Produto" />
                                            </td>
                                            <td className='tName'>
                                                <h3>{name}</h3>
                                                <span> Quantidade: {quant}</span>
                                            </td>
                                            <td className='tPrice'>
                                                <span>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>                                    
                                            </td>
                                            <td >
                                                <BsPlusCircleFill size={20} className='tBtn' onClick={() => addItem(price,id,quant)}/>
                                                <BsTrash size={20} className='tBtn' onClick={() => removeItem(id,quant)} />
                                            </td>                                     
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <hr className='hr-cart'/>         
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}

                    {item.length === 0 && (
                        <p className='vazio'>Nenhum item ainda...</p>
                    )}

                    <h3 className='total'>Subtotal:  
                        {item.map((props) => {
                            valorTotal += props.price;
                        })}
                        {valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </h3>
                    <a className='finalizar' >Finalizar Compra</a>
                </Modal>

            </div>
        </div>
    )
}

export default Nav