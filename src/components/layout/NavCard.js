import * as React from 'react';
import '../../assets/scss/youtube.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import YoutubeLogo from '../../../src/assets/img/Youtube_Logo_BB.png';
import InstagramLogo from '../../../src/assets/img/Instagram_Logo_BB.png';
import ModelLogo from '../../../src/assets/img/Model_Logo_BB.png';
import { useNavigate } from 'react-router-dom';

export default function NavCard({ type }) {
  const navigate = useNavigate();
  const [LOGO, setLOGO] = React.useState();
  React.useEffect(() => {
    if (type === 'YOUTUBE') {
      setLOGO(YoutubeLogo);
    } else if (type === 'INSTA') {
      setLOGO(InstagramLogo);
    } else setLOGO(ModelLogo);
  }, []);

  const onClickNav = () => {
    if (type === 'YOUTUBE') {
      navigate('/youtube');
    } else if (type === 'INSTAGRAM') {
      navigate('/instagram');
    } else navigate('/model');
  };
  return (
    <Card className="card" sx={{ maxWidth: 420, maxHeight: 557, border: 0 }} onClick={onClickNav}>
      <CardMedia component="img" width="183" height="129" image={LOGO} alt="green iguana" />
      <CardContent className="card" sx={{ textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant="h5"
          fontFamily={'Pretendard'}
          component="div"
          color="white"
        >
          {type}
        </Typography>
        <Typography variant="body2" fontFamily={'Pretendard'} color="white">
          {'컨텐츠내용'}
        </Typography>
      </CardContent>
    </Card>
  );
}
