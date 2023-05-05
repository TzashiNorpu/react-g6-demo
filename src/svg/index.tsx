import {FC} from 'react';
import './index.less';

interface SvgIconProps {
    svgName: string; // svg名字
    svgClass?: string; // 自定义类名
}

const SvgIcon: FC<SvgIconProps> = (props) => {
    const {svgName,  svgClass} = props;
    return (
        <i aria-hidden='true'>
            <svg className={`svg-class ${svgClass}`}>
                <use xlinkHref={'#icon-' + svgName}  />
            </svg>
        </i>
    );
};

export default SvgIcon;
