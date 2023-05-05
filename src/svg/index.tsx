import {FC} from 'react';
import './index.less';

interface SvgIconProps {
    svgName: string; // svg名字
    svgClass?: string; // 自定义类名
}

function dragStart(e:React.DragEvent,svgName:string) {
    e.dataTransfer.setData('svgName',JSON.stringify({
      svgName:svgName
}))}

const SvgIcon: FC<SvgIconProps> = (props) => {

    const {svgName,  svgClass} = props;

    return (
        <i draggable aria-hidden='true'  onDragStart={e=>dragStart(e,svgName)} >
            <svg className={`svg-class ${svgClass?svgClass:''}`}>
                <use xlinkHref={'#icon-' + svgName}/>
            </svg>
        </i>
    );
};

export default SvgIcon;
