import React from 'react';
import { LeftColumn } from '../components/LeftColumn';
import { Avatar } from '../components/Avatar';
import { DownloadButton, SmallerButton } from '../components/Button';
import avatarUrl from '../assets/img/cvAvatar.jpeg';
import { Contacts } from './Contacts';
import { FullName, MainPosition } from '../components/Heading';
import Download from '../components/icons/Download';

export class Aside extends React.Component {
  render() {
    return (
      <LeftColumn>
        <Avatar src={avatarUrl} alt="Profile photo" />
        <div>
          <FullName>Вячеслав Минин</FullName>
          <MainPosition>Frontend разработчик</MainPosition>

          <Contacts />
        </div>
        <div>
          <DownloadButton href="/cv/minin_cv.pdf" download>
            Скачать PDF
          </DownloadButton>
          <SmallerButton href="/cv/minin_cv.pdf" download>
            <Download />
          </SmallerButton>
        </div>
      </LeftColumn>
    );
  }
}
