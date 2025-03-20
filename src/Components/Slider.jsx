import Carousel from 'react-bootstrap/Carousel';
import images from "./ImageProvider";

function Slider() {
  return (
    <Carousel data-bs-theme="dark" className='mt-3 container-fluid container-md'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.Baner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;