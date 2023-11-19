import {Link} from "react-router-dom";
import {logoutAction} from "../../store/api-actions.ts";
import {useAppDispatch} from "../../hooks/hooks-index.ts";

type UserBlockProps = {
  imgPath: string;
}

function UserBlock({imgPath}: UserBlockProps) {
  const dispatch = useAppDispatch();
  const onClick = ()=>{
    dispatch(logoutAction())
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={imgPath} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to='/login' className="user-block__link" onClick={onClick}>Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
