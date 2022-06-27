import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Button(props) {
   return(
      <>
         <button className={props.btnType} onClick={props.function}>
            {props.content}

            <FontAwesomeIcon className="pl-1" icon={props.icon}></FontAwesomeIcon>
            {props.customIcon}
         </button>
      </>
   )
}