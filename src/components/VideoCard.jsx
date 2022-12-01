import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{ width: { xs: '275px', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '275px', sm: '358px', md: '320px' }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          width: { xs: '275px', sm: '358px', md: '320px' },
          backgroundColor: '#1e1e1e',
          height: '106px',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0.6)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='grey'>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0.6)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', mx: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
