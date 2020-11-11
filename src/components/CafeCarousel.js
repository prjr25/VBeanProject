import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import "../App";

const items = [
    {
        src: "https://res.cloudinary.com/prjr25/image/upload/v1604631212/VBeanProject/images/cafe/cafe-counter_l7fkyc.jpg",
        altText: "Cafe counter"
    },
    {
        src: "https://res.cloudinary.com/prjr25/image/upload/v1604631212/VBeanProject/images/cafe/cafe-dining-room-wds_ekqwqj.jpg",
        altText: "Cafe counter"
    },
    {
        src: "https://res.cloudinary.com/prjr25/image/upload/v1604631217/VBeanProject/images/cafe/barista-pourover-wds_dg2fmf.jpg",
        altText: "Cafe counter"
    },
    {
        src: "https://res.cloudinary.com/prjr25/image/upload/v1604631225/VBeanProject/images/drinks/lattes-wds_tzgdey.jpg",
        altText: "Cafe counter"
    }
];

const CafeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel className="myCarousel" activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CafeCarousel;
