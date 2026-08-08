import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Default() {
    const images = ["/Images/tortoise.jpg", "/Images/butterfly.jpg", "/Images/cat.jpg", "/Images/deer.jpg", "/Images/elephant.jpg", "/Images/horse.jpg", "/Images/lion.jpg"]
    return (
        <div>
            <Swiper>
                {images.map((path, index) => (
                    <SwiperSlide key={index} className="flex! justify-center!">
                        <img src={path} className="md:h-screen w-full object-cover" alt="slide image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Default