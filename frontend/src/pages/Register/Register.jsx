import { faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import Button from '../../components/Button/Button'
import FaRegister from '../../components/icons/fa-register'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FaBroom from '../../components/icons/fa-broom'
import FaHouse from '../../components/icons/fa-house'

export default function Register() {
   let inputName = document.querySelector('#InputName')
   let typeProduct = document.querySelector('#TypeProduct')
   let inputQTD = document.querySelector('#InputQTD')
   let inputPrice = document.querySelector('#InputPrice')

   const navigate = useNavigate()

   const newProduct = () => {
      axios.post('http://localhost:3001/register', {
         name: document.querySelector('#InputName').value,
         type: document.querySelector('#TypeProduct').value,
         qtd: document.querySelector('#InputQTD').value,
         price: document.querySelector('#InputPrice').value
      })
         .then(response => {
            console.log(response.data.msg)
         })
      .then(alert('Produto Cadastrado com Sucesso!'))
      .then(setInterval(() => { navigate('/') }, 500))
      .catch(err => console.log(err))

      console.log(inputName.value, typeProduct.value, inputQTD.value, inputPrice.value)

      clearInput()
   }

   function clearInput() {
      console.log(inputName.value, typeProduct.value, inputQTD.value, inputPrice.value)

      inputName.value = ''
      inputQTD.value = ''
      inputPrice.value = ''
   }

   return (
      <>
         <div className="container flex column">
            <h1 className='h1 flex text-title'>
               <FaRegister w='30' h='30' iconColor='#C1C7E0' />
               <span className='pl-2 flex wrap'>
                  Registre um novo produto
               </span>
            </h1>

            <form action="#" className="container flex column">

               <div className="column w-100">
                  <input
                     type="text"
                     id="InputName"
                     data-ph="Nome do Produto"
                     placeholder="Nome do Produto"
                     className="input text-title w-100"
                  />
               </div>

               <div className="my-4 responsive-register w-100 flex jc-sb">

                  <select name="TypeProduct" id="TypeProduct" className='select text-title w-30'>
                     <option value="#">Escolha o Tipo</option>
                     <option value="Alimentos">Alimentos</option>
                     <option value="Bebidas">Bebidas</option>
                     <option value="Outros">Outros</option>
                  </select>

                  <input
                     type="text"
                     id="InputQTD"
                     placeholder="Quantidade"
                     className="input text-title ml-1 w-30"
                  />

                  <input
                     type="text"
                     id="InputPrice"
                     placeholder="R$ Preço"
                     className="input text-title ml-1 w-30"
                  />

               </div>

            </form>

            <div className="flex mb-4 btn-group">
               <Button
                  btnType="btn btn-success mr-4 btn1"
                  content="Registrar"
                  icon={faCircleCheck}
                  function={() => newProduct()}
               />

               <Button
                  btnType="btn btn-info flex"
                  content="Limpar"
                  customIcon={<FaBroom w='18' h='18' className="ml-1" iconColor="#212529" />}
                  function={() => clearInput()}
               />
            </div>

            <div className="flex btn-back w-100">
               <Link to="/" className="back-responsive-register flex  mx-4">
                  <Button
                     btnType="btn btn-warning w-100"
                     content="Voltar para Home"
                     customIcon={<FaHouse w='18' h='18' className='ml-1' iconColor='#212529' />}
                  />
               </Link>
            </div>


         </div>
      </>
   )
}