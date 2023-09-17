import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export function ViewSlide({ listImage }: { listImage: any[] }) {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    const { width } = useViewportSize()
    return (
        <Carousel
            maw={720}
            height={500}
            mx="auto"
            withIndicators
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            {listImage.map((v, k) => <Carousel.Slide key={k}>
                <Image height={500} width={720} src={`/img/${v.id}.${v.ext}`} alt='' />
            </Carousel.Slide>)}
        </Carousel>
    );
}