import Carousel from 'react-bootstrap/Carousel';
import images from "./ImageProvider";

function Slider() {
  return (
    <Carousel data-bs-theme="dark" className='mt-3 container-fluid container-md'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.Baner1} height={"450px"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Slide label</h5>
          <p>You get an natural food at best cost.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 "
          src={images.Baner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Fruits and Veggies are the good for health...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;