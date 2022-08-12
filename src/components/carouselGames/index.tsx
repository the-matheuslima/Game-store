import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
type Props = {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

function CarouselGames({ children }: Props) {
    return (
        <Splide
            options={{
                type: 'slide',
                drag: 'free',
                gap: "10px",
                arrows: false,
                perPage: 4,
                fixedWidth: '324px',
                fixedHeight: '317px',

                breakpoints: {
                    640: {
                        fixedWidth: '307px',
                        fixedHeight: '300px',
                        perPage: 1,
                    },
                    400: {
                        fixedWidth: '290px',
                        fixedHeight: '333px',
                        perPage: 1,
                    }
                },
                pagination: false,
            }}
        >
            {children}
        </Splide>
    )
};

export default CarouselGames