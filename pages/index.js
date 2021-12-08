import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function Home() {
  return (
    <div>
      <Card sx={{ maxWidth: 900, margin: "100px 400px 100px 400px", }}>
        <CardHeader
          avatar={
            <Avatar sx={{ width: 200, height: 200 }} aria-label="picture">
              <img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Herbert_Macaulay_portrait.jpg' />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<CardContent>
            <Typography sx={{ fontWeight: 900, fontSize: 40 }}>Herbert Macaulay</Typography>
          </CardContent>}
          subheader={
            <CardContent>
              <FavoriteIcon />
              <ShareIcon />
              <Typography sx={{ fontWeight: 100, fontSize: 10 }}>Views</Typography>
            </CardContent>}

        />

        <div className='description'>
          <p >Olayinka Herbert Samuel Heelas Badmus Macaulay was a Nigerian nationalist, politician, surveyor, engineer, architect, journalist, and musician and is considered by many Nigerians as the founder of Nigerian nationalism.</p>
          <p>Prior to the beginning of the twentieth century, Macaulay associated with many Lagos socialites, worked as a private surveyor and had a moderate outlook about colonialism.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sem sed neque pulvinar lobortis. Praesent sollicitudin felis et nisl molestie, sed sodales augue pharetra. Vivamus dapibus dignissim tincidunt. Suspendisse sollicitudin mollis blandit. Sed consequat molestie sem, mattis molestie magna consectetur id. Etiam faucibus lectus id enim imperdiet, nec euismod mi ornare. Proin sem leo, vehicula eget nisi eget, sagittis convallis lorem. Sed placerat elementum elit, ac placerat urna ultricies quis. Sed a magna sem. Duis venenatis tristique metus id varius. Nunc volutpat ex quis tristique consectetur. Curabitur lorem nisi, commodo sit amet placerat vitae, interdum eu ante. Praesent arcu enim, vulputate non tortor sed, semper tempor justo. Morbi lacinia dictum mattis. Morbi vitae ornare eros.</p>
          <p>Nullam condimentum ligula sed convallis porttitor. In accumsan pellentesque dolor, vel bibendum erat lacinia et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam augue dolor, tempus auctor felis quis, pellentesque scelerisque justo. Morbi luctus tempor libero, eget aliquet est varius nec. Donec libero metus, suscipit ut ex eget, tincidunt congue metus. Duis tincidunt ullamcorper tempus. Proin ac viverra lorem, ac consectetur mi. Quisque vel dui tempor, sodales libero sed, vehicula augue. Vestibulum lectus lectus, sodales sit amet maximus a, vulputate non sapien. Nulla elit ligula, fermentum quis venenatis vel, viverra tempus diam. Ut vehicula, odio eget aliquam ultricies, nulla ante vulputate lacus, ut iaculis nisl purus eu libero. Vestibulum eu convallis nunc. Phasellus commodo urna ligula. Suspendisse commodo, augue sed blandit maximus, enim ex tristique arcu, non efficitur odio odio vel neque.</p>
          <p>Quisque tempor, risus id porttitor rhoncus, leo tortor consectetur augue, nec vestibulum leo justo eget diam. Donec in nulla convallis, vestibulum mauris et, euismod dolor. Nulla congue magna eu justo congue consectetur sed pellentesque nisi. Donec tempor elementum turpis, at congue mauris vehicula pellentesque. Vestibulum vitae mi convallis elit fermentum tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius purus orci, at dignissim ipsum rutrum a.</p>
        </div>

        <div className='footer'>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Famirs
          </a>
        </div>
      </Card>
    </div >
  )
}
