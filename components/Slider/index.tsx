import React, { ReactElement, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

export interface SliderProps {
    data: any[];
    renderItem: (item: any, index: number, active: boolean) => ReactElement;
    getColor?: (item: any) => any;
    buttonColor?: any;
    animation?: boolean;
}
const Slider: React.FC<SliderProps> = ({ data, renderItem, getColor }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider<any>({
        breakpoints: {
            '(max-width: 500px)': {
                slidesPerView: 4,
            },
            '(max-width: 330px)': {
                slidesPerView: 4,
            },
            '(min-width: 768px)': {
                slidesPerView: 6,
            },
            '(min-width: 1100px)': {
                slidesPerView: 7,
            },
        },
        loop: true,
        slidesPerView: 7,

        dragStart: () => {
            setPause(true);
        },
        dragEnd: () => {
            setPause(false);
        },
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
    });
    const [pause, setPause] = React.useState(false);
    const timer = React.useRef<any>();
    React.useEffect(() => {
        sliderRef.current.addEventListener('mouseover', () => {
            setPause(true);
        });
        sliderRef.current.addEventListener('mouseout', () => {
            setPause(false);
        });
    }, [sliderRef]);

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next();
            }
        }, 3000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);

    useEffect(() => {
        if (getColor) getColor(data[currentSlide]);
    }, [currentSlide]);

    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col">
            <div ref={sliderRef} className="keen-slider lg:w-full -mt-5">
                {data?.map((item, index) => {
                    return (
                        <div key={index} className={`keen-slider__slide ${index === currentSlide}`}>
                            <div
                                className={`transfor flex justify-center  ${
                                    index === currentSlide
                                }`}
                            >
                                {renderItem(item, index, index === currentSlide)}
                            </div>
                            <div className="flex lg:text-lg md:text-lg text-xs justify-center mt-3 font-bold opacity-75 text-white">
                                <p className="text-sm 3xl:text-lg -mt-2">{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
