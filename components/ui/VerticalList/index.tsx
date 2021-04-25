import React, { ReactElement, FC } from 'react';
interface Props {
    numColumns?: number;
    className?: string;
    data?: any[];
    listEmptyElement?: Element;
    renderItem: (item: any, index: number) => ReactElement;
}
const VerticalList: FC<Props> = ({ numColumns = 1, className, data = [], renderItem }) => {
    let id = 1;
    return (
        <div
            className={` ${`grid overflow-y-auto overflow-x-hidden w-full scrollbar-none h-auto grid-cols-${numColumns}`} ${className}`}
        >
            {data.map((data, index) => {
                id++;
                return <div key={id}>{renderItem(data, index)}</div>;
            })}
        </div>
    );
};
export default VerticalList;
