import { Carousel } from 'antd';

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '1080px',
  textAlign: 'center',
  background: '#364d79',
};

const videoContainer = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const iframe = {
  /* optional */
  width: '100%',
  height: '100%',
}

const caro = () => (
  <Carousel autoplay>
    <div className={videoContainer}>
      <iframe frameborder="0" height="100%" width="100%" src="https://res.cloudinary.com/ngmc/video/upload/v1611136273/production_ID_4121322_xgzzqs.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);


export default caro;
