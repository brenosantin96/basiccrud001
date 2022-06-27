import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { faCircleCheck, faListAlt } from '@fortawesome/free-regular-svg-icons'

export default function Main() {
   return(
      <>
         <div className="container flex column">

         <h1 className="text-title my-2">Bem Vindo a Aplicação 🧙‍♂️</h1>

         <h2 className="text-title my-1">O que gostaria de fazer?</h2>

         <div className="mt-2 w-100 flex">

            <Link to='/register'>
               <Button btnType='btn btn-success m-2' content='Register' icon={faCircleCheck} />
            </Link>

            <Link to='/list'>
               <Button btnType='btn btn-info' content='Listagem dos Produtos' icon={faListAlt} />
            </Link>

         </div>

         </div>
      </>
   )
}