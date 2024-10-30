import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import { ARROW } from "../../constants/icon";

const Icons = {
    [ARROW]: Arrow,
};

const Icon = props => {
    const { name } = props;
    const Component = Icons[name];

    return <Component {...props} />;
};

export default Icon;
