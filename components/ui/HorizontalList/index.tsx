import React, { ReactElement, useRef } from 'react';
import cn from 'classnames';

interface Props {
    data: any[];
    lastItem?: ReactElement;
    firstItem?: ReactElement;
    className?: string;
    renderItem: (item: any, index: number) => ReactElement;
}
const HorizontalList = ({ data, firstItem, lastItem, renderItem, className }: Props) => {
    const slider = useRef<HTMLDivElement | any>(null);
    let id = 0;
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    return (
        <div
            ref={slider}
            onMouseDown={(e) => {
                isDown = true;
                startX = e.pageX - slider.current.offsetLeft;
                scrollLeft = slider.current.scrollLeft;
            }}
            onMouseLeave={() => {
                isDown = false;
            }}
            onMouseUp={() => {
                isDown = false;
            }}
            onMouseMove={(e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.current.offsetLeft;
                const walk = (x - startX) * 3;
                slider.current.scrollLeft = scrollLeft - walk;
            }}
            className={cn('flex overflow-x-scroll overflow-y-hidden scrollbar-none', className)}
        >
            <div>{firstItem}</div>
            {data?.map((item: any, index: number) => {
                id++;
                return <div key={id}>{renderItem(item, index)}</div>;
            })}
            <div>{lastItem}</div>
        </div>
    );
};

export default HorizontalList;
