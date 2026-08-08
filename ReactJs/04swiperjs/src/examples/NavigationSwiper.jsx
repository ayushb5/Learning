import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function NavigationSwiper() {
    const images = ["/Images/tortoise.jpg", "/Images/butterfly.jpg", "/Images/cat.jpg", "/Images/deer.jpg", "/Images/elephant.jpg", "/Images/horse.jpg", "/Images/lion.jpg"]
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]}>
                {images.map((path, index) => (
                    <SwiperSlide key={index}>
                        <img src={path} className="md:h-screen w-full object-cover" alt="slide image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default NavigationSwiper