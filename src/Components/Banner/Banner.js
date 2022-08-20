
import './Banner.css';
import slid from '../../img/slider_logo_01.png';
import 'animate.css';
import Spin from 'react-reveal/Spin';
import { Reveal, Slide,} from 'react-reveal';


const Banner = () => {

  

    return (
        <div className='banner text-center   '>
            <div className='text-center pb-2 px-1'>
            <Spin>
                <img className='' src={slid} alt="img" />
                </Spin>
                <h5 className='c-tomato py-4'>Coursat, Responsive Courses Template </h5>
                <Slide right>
                <p className='heading '>WE WILL HELP YOU TO LEARN</p>
                </Slide>
                <p className='w-75 m-auto mb-1 '>No matter what your skill level is, you will be able to learn & accomplish the things that you want to do.As we only teach the things that are essential, you can get things done quickly, instead of spending hours on learning.</p>
            </div>
     
           

            
        </div>
    );
};

export default Banner;