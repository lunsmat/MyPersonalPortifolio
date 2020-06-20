import WebDesign from '../../styles/assets/images/WebDesignIcon.png';
import InterfaceDesign from '../../styles/assets/images/InterfaceDesignIcon.png';
import WebDevelopment from '../../styles/assets/images/WebDevelopmentIcon.png';
import UxDesign from '../../styles/assets/images/UxDesignerIcon.png';
import MotionGraphic from '../../styles/assets/images/MotionGraphicIcon.png';
import SeoOptimize from '../../styles/assets/images/SeoOptimizeIcon.png';

export interface PropsService {
    topColor: string;
    downColor: string;
    image: string;
    title: string;
    body: string;
}

const Services: () => PropsService[] = ()  => ([
    {
        topColor: '#8540FF',
        downColor: '#803AFB',
        image: WebDesign,
        title: 'Web Design',
        body: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'
    },
    {
        topColor: '#FFC50C',
        downColor: '#FFBB01',
        image: InterfaceDesign,
        title: 'Interface Design',
        body: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'
    },
    {
        topColor: '#EC407A',
        downColor: '#F5276C',
        image: WebDevelopment,
        title: 'Web Development',
        body: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'
    },
    {
        topColor: '#FF6331',
        downColor: '#FF5823',
        image: UxDesign,
        title: 'Ux Design',
        body: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'
    },
    {
        topColor: '#13B6FF',
        downColor: '#03ACF8',
        image: MotionGraphic,
        title: 'Motion Graphic',
        body: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'
    },
    {
        topColor: '#49AF46',
        downColor: '#49B846',
        image: SeoOptimize,
        title: 'Seo Optimize',
        body: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'
    },
]);

export default Services;
