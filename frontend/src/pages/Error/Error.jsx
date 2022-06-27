import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import FaHouse from "../../components/icons/fa-house"
import FaTriangleExclamation from "../../components/icons/fa-triangle-exclamation"

export default function Error() {
   return(
      <>
        <div className="container flex column">
            <h1 className="text-danger danger-hover">ERRO</h1>

            <FaTriangleExclamation w="80" h="80" iconColor="#FFC107" className="faTriangleExclamation flex"/>

            <h1 className="text-danger danger-hover">Página não encontrada</h1>

            <div className="flex mt-3 responsive">
               <Link to='/' className="back-link">
                  <Button btnType="btn btn-warning back" content="Voltar para Home" customIcon={<FaHouse w='18' h='18' className='ml-1' iconColor='#212529' />} />
               </Link>
            </div>
         </div>
      </>
   )
}