import { FaSpinner } from "react-icons/fa";
import * as S from "./styles";

const Loading = () => {
  return (
    <S.Rotate>
      <FaSpinner />
    </S.Rotate>
  );
};

export default Loading;
